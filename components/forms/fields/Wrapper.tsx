import { PropsWithChildren } from "react";

import type FieldProperties from "./Properties";

export default function Wrapper({
  name,
  label,
  error,
  children,
}: PropsWithChildren<FieldProperties>) {
  return (
    <div className="mb-3 form-floating">
      {children}
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      {error && (
        <div className="invalid-feedback">{error.message?.toString()}</div>
      )}
    </div>
  );
}
