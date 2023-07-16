import React, { PropsWithChildren } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Form({
  defaultValues,
  onSubmit,
  resolver,
  children,
}: PropsWithChildren<{
  defaultValues?: any; // initial values
  onSubmit: any; // submit handler
  resolver: any; // yup validation
}>) {
  const { register, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(resolver),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child) && child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
}
