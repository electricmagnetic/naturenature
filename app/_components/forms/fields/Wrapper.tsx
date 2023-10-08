import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import type FieldProperties from "./Properties";

const CLASS_FIELD_MARGIN = "mb-3";

const WrapperCheck = ({
  name,
  label,
  error,
  children,
}: PropsWithChildren<FieldProperties>) => (
  <div className={`${CLASS_FIELD_MARGIN} form-check`}>
    {children}
    <label className="form-check-label" htmlFor={name}>
      {label}
    </label>
    {error && (
      <div className="invalid-feedback">{error.message?.toString()}</div>
    )}
  </div>
);

// As per Bootstrap Docs, input groups with floating labels have different placement rules which makes for a complex component
const WrapperInputGroup = ({
  name,
  label,
  error,
  children,
  renderInputGroupLabel: RenderLabel,
  renderInputGroupButton: RenderButton,
}: PropsWithChildren<
  FieldProperties & {
    renderInputGroupLabel?: FC;
    renderInputGroupButton?: FC;
  }
>) => (
  <div className={CLASS_FIELD_MARGIN}>
    <div className={clsx("input-group", error && "has-validation")}>
      <div className={clsx("form-floating", error && "is-invalid")}>
        {children}
        {(RenderLabel && <RenderLabel />) || (
          <label className="form-label" htmlFor={name}>
            {label}
          </label>
        )}
      </div>
      {RenderButton && <RenderButton />}
      {error && (
        <div className="invalid-feedback">{error.message?.toString()}</div>
      )}
    </div>
  </div>
);

const Wrapper = ({
  name,
  label,
  error,
  children,
}: PropsWithChildren<FieldProperties>) => (
  <div className={`${CLASS_FIELD_MARGIN} form-floating`}>
    {children}
    <label className="form-label" htmlFor={name}>
      {label}
    </label>
    {error && (
      <div className="invalid-feedback">{error.message?.toString()}</div>
    )}
  </div>
);

Wrapper.Check = WrapperCheck;
Wrapper.InputGroup = WrapperInputGroup;

export default Wrapper;
