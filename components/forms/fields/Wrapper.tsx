import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import type FieldProperties from "./Properties";

const CLASS_FIELD_MARGIN = "mb-3";

export default function Wrapper({
  name,
  label,
  error,
  children,
  isInputGroup,
  renderInputGroupLabel: RenderLabel,
  renderInputGroupButton: RenderButton,
}: PropsWithChildren<
  FieldProperties & {
    isInputGroup?: boolean;
    renderInputGroupLabel?: FC;
    renderInputGroupButton?: FC;
  }
>) {
  if (isInputGroup) {
    // As per Bootstrap Docs, input groups with floating labels have different placement rules. NB: the label object is not included.
    return (
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
  }
  return (
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
}
