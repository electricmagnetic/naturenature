import clsx from "clsx";
import { useController } from "react-hook-form";

import Wrapper from "./Wrapper";
import type FieldProperties from "./Properties";

// TODO: tested only for boolean type checkboxes
export default function FieldCheckbox({
  name,
  label,
  ...others
}: FieldProperties) {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name });

  return (
    <Wrapper.Check name={name} label={label} error={error}>
      <input
        type="checkbox"
        className={clsx("form-check-input", invalid && "is-invalid")}
        id={name}
        {...field}
        {...others}
        checked={field.value}
      />
    </Wrapper.Check>
  );
}
