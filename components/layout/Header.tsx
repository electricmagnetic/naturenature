import { PropsWithChildren } from "react";

export default function Header({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div className="border-top border-bottom py-2 bg-light-subtle mb-3">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-auto">
          <h1 className="h4 my-1">{title}</h1>
        </div>
        <div className="col-md-auto">{children}</div>
      </div>
    </div>
  );
}
