import { PropsWithChildren } from "react";
import { clsx } from "clsx";
import Icon from "./Icon";

export default function Message({
  isError = false,
  children,
}: PropsWithChildren<{ isError?: boolean }>) {
  return (
    <div
      className={clsx("alert m-0", isError ? "alert-danger" : "alert-light")}
      role="alert"
    >
      {isError ? (
        <Icon iconName="exclamation-diamond" />
      ) : (
        <Icon iconName="info-circle" />
      )}
      {children}
    </div>
  );
}
