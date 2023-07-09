import { PropsWithChildren } from "react";

export default function Card({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <div className="card">
      <div className="card-body">
        {title && <h3 className="card-title h5 text-uppercase">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
