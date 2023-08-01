"use client";

import { PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";

type FieldProperties = {
  name: string;
  label: string;
};

const Wrapper = ({
  name,
  label,
  children,
}: PropsWithChildren<FieldProperties>) => (
  <>
    <label className="form-label" htmlFor={name}>
      {label}
    </label>
    {children}
  </>
);

/* TODO
- error handling: errors.name?.message && <p>{errors.name?.message}</p>
*/
const Field = ({
  type = "text",
  name,
  label,
  ...others
}: FieldProperties & {
  type: string;
}) => {
  const { register } = useFormContext();

  return (
    register && (
      <Wrapper name={name} label={label}>
        <input
          className="form-control"
          id={name}
          {...register(name)}
          {...others}
        />
      </Wrapper>
    )
  );
};

export default Field;
