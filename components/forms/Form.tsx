"use client";

import { PropsWithChildren, useCallback, useState } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import { useRouter } from "next/navigation";
import type { PostgrestError } from "@supabase/supabase-js";

import Message from "@/components/ui/Message";
import Submit from "@/components/forms/Submit";
import type { TableRow } from "@/types/database";

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

const Form = ({
  methods,
  table,
  mutation,
  children,
}: PropsWithChildren<{
  methods: UseFormReturn<any>; // TODO any
  table: string;
  mutation: (values: FieldValues) => Promise<{
    status: number;
    data: TableRow<any>;
    error: PostgrestError | null;
  }>;
}>) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const formSubmitted = useCallback(
    async (values: FieldValues) => {
      setIsLoading(true);
      setIsError(false);
      setMessage("");

      const { status, data, error } = await mutation(values);

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

      setIsLoading(false);
    },
    [setIsLoading, setIsError, setMessage, router],
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(formSubmitted)}>
        {children}
        <Form.Footer>
          <Submit isLoading={isLoading}>Submit</Submit>
        </Form.Footer>
        {message && <Form.Message isError={isError} message={message} />}
      </form>
    </FormProvider>
  );
};

Form.Fieldset = FormFieldset;
Form.Message = FormMessage;
Form.Footer = FormFooter;

export default Form;
