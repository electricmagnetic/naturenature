import { PropsWithChildren } from "react";
import Icon from "./Icon";

export default function Message({ children }: PropsWithChildren) {
  return (
    <div className="alert alert-light m-0" role="alert">
      <Icon iconName="info-circle" />
      {children}
    </div>
  );
}
