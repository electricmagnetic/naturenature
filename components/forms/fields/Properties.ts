import type { FieldError } from "react-hook-form";

type FieldProperties = {
  name: string;
  label: string;
  error?: FieldError;
};

export default FieldProperties;
