import React, { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Message from "@/components/ui/Message";

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
  <fieldset className="border p-2">
    {title && <legend className="text-uppercase h5">{title}</legend>}
    {children}
  </fieldset>
);

const FormFooter = ({ children }: PropsWithChildren) => (
  <div className="d-flex my-3">{children}</div>
);

const Form = ({
  defaultValues,
  onSubmit,
  resolver,
  children,
}: PropsWithChildren<{
  defaultValues?: any; // TODO initial values
  onSubmit: any; // TODO submit handler
  resolver: any; // TODO yup validation
}>) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(resolver),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

Form.Fieldset = FormFieldset;
Form.Message = FormMessage;
Form.Footer = FormFooter;

export default Form;
