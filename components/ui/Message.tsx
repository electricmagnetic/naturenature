import { PropsWithChildren } from "react";
import { clsx } from "clsx";

import Icon from "./Icon";

export default function Message({
  isError = false,
  className,
  children,
}: PropsWithChildren<{ isError?: boolean; className?: string }>) {
  return (
    <div
      className={clsx(
        "alert m-0",
        isError ? "alert-danger" : "alert-light",
        className,
      )}
      role="alert"
    >
      <div className="row">
        <div className="col-1">
          {isError ? (
            <Icon iconName="exclamation-diamond" aria-label="Information" />
          ) : (
            <Icon iconName="info-circle" aria-label="Error" />
          )}
        </div>
        <div className="col">{children}</div>
      </div>
    </div>
  );
}
