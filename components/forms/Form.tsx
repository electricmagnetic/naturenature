"use client";

import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import { ObjectSchema } from "yup";
import { useRouter } from "next/navigation";
import type { PostgrestError } from "@supabase/supabase-js";
import { yupResolver } from "@hookform/resolvers/yup";

import Message from "@/components/ui/Message";
import Submit from "@/components/forms/Submit";

const FormMessage = ({
  message,
  isError,
}: {
  message: string;
  isError?: boolean;
}) => <Message isError={isError}>{message}</Message>;

const FormFieldset = ({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) => (
  <fieldset className="border pt-3 px-3 mb-3">
    {title && <legend className="text-uppercase fs-6 fw-bold">{title}</legend>}
    {children}
  </fieldset>
);

const FormFooter = ({ children }: PropsWithChildren) => (
  <div className="d-flex my-3">{children}</div>
);

/**
 * - table: the Supabase table (for redirection on success)
 * - formToDatabase: function for transforming validated form data to a database object
 * - databaseToForm: function for transforming database objects into form initial values
 * - mutation: function for upserting the data
 * - render: JSX function for rendering the form
 * - initialValues: initial values for the form
 * - validator: Yup object schema for form validation
 * - entity: if provided, the Form will use this for the default values (instead of initialValues)
 */
type FormProps<FormValues, Entity> = {
  table: string;
  formToDatabase: (values: FormValues) => Entity;
  databaseToForm: (values: Entity) => FormValues;
  mutation: (entity: Entity) => Promise<{
    status: number;
    data: Entity | null;
    error: PostgrestError | null;
  }>;
  render: () => JSX.Element;
  validator: ObjectSchema<any>;
  initialValues: FormValues;
  entity?: Entity;
};

function Form<FormValues extends FieldValues, Entity extends { id: string }>({
  // TODO tidy "extends" section
  table,
  formToDatabase,
  databaseToForm,
  mutation,
  render: FormContent,
  initialValues,
  validator,
  entity,
}: FormProps<FormValues, Entity>) {
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const methods = useForm<FormValues>({
    defaultValues: useMemo(() => {
      const defaultValues = entity ? databaseToForm(entity) : initialValues;
      return defaultValues as DefaultValues<any>; // TODO any
    }, [entity, initialValues]),
    resolver: yupResolver(validator),
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
  } = methods;

  // Publish validation errors to the console
  useEffect(() => {
    isSubmitted && console.info(errors);
  }, [errors, isSubmitted]);

  const formSubmitted = useCallback(
    async (values: FormValues) => {
      setIsError(false);
      setMessage("");

      const entity = formToDatabase(values);
      const { status, data, error } = await mutation(entity);

      if (!error && data && status == 201) {
        router.refresh();
        return router.push(`/${table}/${data.id}`);
      }

      if (error) {
        setIsError(true);
        setMessage(error.message);
      } else {
        setIsError(false);
        setMessage(`Status ${status}`);
      }
    },
    [setIsError, setMessage, router, formToDatabase, mutation, table],
  );

  return (
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
        {message && <Form.Message isError={isError} message={message} />}
      </form>
    </FormProvider>
  );
}

Form.Fieldset = FormFieldset;
Form.Message = FormMessage;
Form.Footer = FormFooter;

export default Form;
