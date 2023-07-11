import { PropsWithChildren } from "react";

import Icon from "@/components/ui/Icon";

export default function Header({
  title,
  iconName,
  children,
}: PropsWithChildren<{ title: string; iconName?: string }>) {
  return (
    <div className="border-top border-bottom py-2 bg-light-subtle mb-3">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-auto">
          <h1 className="h4 my-1">
            {iconName && <Icon iconName={iconName} />}
            {title}
          </h1>
        </div>
        <div className="col-md-auto">{children}</div>
      </div>
    </div>
  );
}
