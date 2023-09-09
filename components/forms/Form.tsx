"use client";

import { PropsWithChildren, useCallback, useEffect, useMemo } from "react";
import clsx from "clsx";
import { DefaultValues, FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PostgrestError } from "@supabase/supabase-js";
import type { ZodType } from "zod";

import Message from "@/components/ui/Message";
import Submit from "@/components/forms/Submit";
import { RelatedObjectsProvider } from "./RelatedObjectsContext";

const IS_PRODUCTION = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

const FormMessage = ({
  message,
  isError,
}: {
  message: string;
  isError?: boolean;
}) => <Message isError={isError}>{message}</Message>;

const FormFieldset = ({
  title,
  isPrimary = false,
  children,
}: PropsWithChildren<{ title?: string; isPrimary?: boolean }>) => (
  <fieldset
    className={clsx(
      "border pt-3 px-3 mb-3 bg-white shadow-sm",
      isPrimary && "border-primary-subtle border-2",
    )}
  >
    {title && (
      <legend className="text-uppercase fs-6 text-secondary fw-normal">
        {title}
      </legend>
    )}
    {children}
  </fieldset>
);

const FormFooter = ({ children }: PropsWithChildren) => (
  <div className="d-flex my-3">{children}</div>
);

/**
 * - table: the Supabase table (for redirection on success)
 * - formSchemaToDto: function for transforming validated form data to a valid DTO
 * - databaseToFormSchema: function for transforming database objects into form initial values
 * - mutation: function for upserting the data
 * - render: JSX function for rendering the form
 * - initialValues: initial values for the form
 * - schema: Zod object schema for form validation
 * - entity: if provided, the Form will use this for the default values (instead of initialValues)
 * - relatedObjects: object that should be used with 'entity' to provided related objects for form controls like 'Combobox'
 */
type FormProps<FormInput, EntityDto, Entity, RelatedObjects> = {
  table: string;
  formToDto: (values: FormInput) => EntityDto;
  entityToForm: (values: Entity) => FormInput;
  mutation: (dto: EntityDto) => Promise<{
    status: number;
    data: Entity | null;
    error: PostgrestError | null;
  }>;
  render: () => JSX.Element;
  schema: ZodType<FormInput>;
  initialValues: Partial<FormInput>;
  entity?: Entity;
  relatedObjects?: RelatedObjects;
};

function Form<
  FormInput extends {},
  EntityDto extends {},
  Entity extends { id?: string },
  RelatedObjects extends {},
>({
  // TODO tidy "extends" section
  table,
  formToDto,
  entityToForm,
  mutation,
  render: FormContent,
  initialValues,
  schema,
  entity,
  relatedObjects,
}: FormProps<FormInput, EntityDto, Entity, RelatedObjects>) {
  const router = useRouter();

  const methods = useForm<FormInput>({
    defaultValues: useMemo(() => {
      const defaultValues = entity ? entityToForm(entity) : initialValues;
      return defaultValues as DefaultValues<FormInput>;
    }, [entity, initialValues, entityToForm]),
    resolver: zodResolver(schema),
    criteriaMode: "all",
  });

  const {
    formState: {
      errors,
      isLoading,
      isSubmitting,
      isSubmitSuccessful,
      isSubmitted,
      isValidating,
    },
    setError,
  } = methods;

  // Publish validation errors to the console
  useEffect(() => {
    isSubmitted && Object.keys(errors).length !== 0 && console.warn(errors);
  }, [errors, isSubmitted]);

  const formSubmitted = useCallback(
    async (values: FormInput) => {
      const entity = formToDto(values);
      const { status, data, error } = await mutation(entity);

      // To assist in debugging form flows
      if (!IS_PRODUCTION) console.info(values);

      if (!error && data && status == 201) {
        router.refresh();
        return router.push(`/${table}/${data.id}`);
      }

      if (error) {
        setError("root.submissionError", {
          type: `${status}`,
          message: `${error.message} (${error.code})`,
        });
      }
    },
    [router, formToDto, mutation, table, setError],
  );

  return (
    <RelatedObjectsProvider value={relatedObjects}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmitted)}>
          <FormContent />
          <Form.Footer>
            <Submit
              isLoading={
                isLoading || isValidating || isSubmitting || isSubmitSuccessful
              }
            >
              Submit
            </Submit>
          </Form.Footer>
          {errors.root?.submissionError && (
            <Form.Message
              isError={true}
              message={`${errors.root.submissionError.message}`}
            />
          )}
        </form>
      </FormProvider>
    </RelatedObjectsProvider>
  );
}

Form.Fieldset = FormFieldset;
Form.Message = FormMessage;
Form.Footer = FormFooter;

export default Form;
