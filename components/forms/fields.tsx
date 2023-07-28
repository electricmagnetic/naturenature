import { PropsWithChildren } from "react";
import { UseFormRegister } from "react-hook-form";

import Loader from "@/components/ui/Loader";

export const FieldWrapper = ({ children }: PropsWithChildren) => (
  <>{children}</>
);

/* TODO
- error handling: errors.name?.message && <p>{errors.name?.message}</p>
*/
export const InputField = ({
  register,
  type = "text",
  name,
  label,
  ...others
}: {
  register?: UseFormRegister<any>;
  type: string;
  name: string;
  label: string;
}) => {
  return (
    register && (
      <FieldWrapper>
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <input
          className="form-control"
          id={name}
          {...register(name)}
          {...others}
        />
      </FieldWrapper>
    )
  );
};

export const Submit = ({
  isLoading,
  children,
}: PropsWithChildren<{ isLoading?: boolean }>) => (
  <button type="submit" className="btn btn-primary" disabled={isLoading}>
    {isLoading ? <Loader isButton /> : children}
  </button>
);
