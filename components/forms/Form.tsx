"use client";

import { PropsWithChildren, useCallback, useEffect, useMemo } from "react";
import clsx from "clsx";
import { DefaultValues, FormProvider, useForm } from "react-hook-form";
import { ObjectSchema } from "yup";
import { useRouter } from "next/navigation";
import type { PostgrestError } from "@supabase/supabase-js";
import { yupResolver } from "@hookform/resolvers/yup";

import Message from "@/components/ui/Message";
import Submit from "@/components/forms/Submit";
import { CompleteEntityProvider } from "./CompleteEntityContext";

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
      isPrimary && "border-primary-subtle",
    )}
  >
    {title && <legend className="text-uppercase fs-6 fw-bold">{title}</legend>}
    {children}
  </fieldset>
);

const FormFooter = ({ children }: PropsWithChildren) => (
  <div className="d-flex my-3">{children}</div>
);

/**
 * - table: the Supabase table (for redirection on success)
 * - formToDto: function for transforming validated form data to a valid DTO
 * - databaseToForm: function for transforming database objects into form initial values
 * - mutation: function for upserting the data
 * - render: JSX function for rendering the form
 * - initialValues: initial values for the form
 * - validator: Yup object schema for form validation
 * - entity: if provided, the Form will use this for the default values (instead of initialValues)
 * - completeEntity: if provided
 */
type FormProps<Dto, Entity, CompleteEntity> = {
  table: string;
  formToDto: (values: Dto) => Dto;
  databaseToForm: (values: Entity) => Dto;
  mutation: (dto: Dto) => Promise<{
    status: number;
    data: Entity | null;
    error: PostgrestError | null;
  }>;
  render: () => JSX.Element;
  validator: ObjectSchema<any>;
  initialValues: Dto;
  entity?: Entity;
  completeEntity?: CompleteEntity;
};

function Form<
  Dto extends { id?: string },
  Entity extends { id?: string },
  CompleteEntity extends { id?: string },
>({
  // TODO tidy "extends" section
  table,
  formToDto,
  databaseToForm,
  mutation,
  render: FormContent,
  initialValues,
  validator,
  entity,
  completeEntity,
}: FormProps<Dto, Entity, CompleteEntity>) {
  const router = useRouter();

  const methods = useForm<Dto>({
    defaultValues: useMemo(() => {
      const defaultValues = entity ? databaseToForm(entity) : initialValues;
      return defaultValues as DefaultValues<any>; // TODO any
    }, [entity, initialValues, databaseToForm]),
    resolver: yupResolver(validator),
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
    isSubmitted && console.warn(errors);
  }, [errors, isSubmitted]);

  const formSubmitted = useCallback(
    async (values: Dto) => {
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
      } else {
        console.info(status);
      }
    },
    [router, formToDto, mutation, table, setError],
  );

  return (
    <CompleteEntityProvider value={completeEntity}>
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
    </CompleteEntityProvider>
  );
}

Form.Fieldset = FormFieldset;
Form.Message = FormMessage;
Form.Footer = FormFooter;

export default Form;
