"use client";

import { PropsWithChildren } from "react";
import { FieldError, useController, useFormContext } from "react-hook-form";
import clsx from "clsx";

type FieldProperties = {
  name: string;
  label: string;
  error?: FieldError;
};

const Wrapper = ({
  name,
  label,
  error,
  children,
}: PropsWithChildren<FieldProperties>) => (
  <>
    <label className="form-label" htmlFor={name}>
      {label}
    </label>
    {children}
    {error && (
      <div className="invalid-feedback">{error.message?.toString()}</div>
    )}
  </>
);

const Field = ({
  type = "text",
  name,
  label,
  ...others
}: FieldProperties & {
  type: string;
}) => {
  const { register } = useFormContext();

  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name });

  return (
    <Wrapper name={name} label={label} error={error}>
      <input
        className={clsx("form-control", invalid && "is-invalid")}
        id={name}
        {...register(name)}
        {...field}
        {...others}
      />
    </Wrapper>
    //)
  );
};

export default Field;
