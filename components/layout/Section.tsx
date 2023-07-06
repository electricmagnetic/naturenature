import { PropsWithChildren } from "react";

export default function Section({
  title,
  isPrimary = false,
  children,
}: PropsWithChildren<{ title?: string; isPrimary?: boolean }>) {
  return (
    <section className={`card mb-3 ${isPrimary && "bg-light"}`}>
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
