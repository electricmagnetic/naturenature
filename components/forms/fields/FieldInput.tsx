import clsx from "clsx";
import { useController } from "react-hook-form";

import Wrapper from "./Wrapper";
import type { HTMLInputTypeAttribute } from "react";
import type FieldProperties from "./Properties";

export default function FieldInput({
  type = "text",
  name,
  label,
  ...others
}: FieldProperties & {
  type: HTMLInputTypeAttribute;
}) {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name });

  return (
    <Wrapper name={name} label={label} error={error}>
      <input
        type={type}
        className={clsx("form-control", invalid && "is-invalid")}
        placeholder={label}
        id={name}
        {...field}
        {...others}
      />
    </Wrapper>
  );
}
