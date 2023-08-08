import clsx from "clsx";
import { PropsWithChildren } from "react";

export default function Section({
  title,
  isPrimary = false,
  children,
}: PropsWithChildren<{ title?: string; isPrimary?: boolean }>) {
  return (
    <section
      className={clsx(
        `mb-3 border p-3 bg-white shadow-sm`,
        isPrimary && "border-primary-subtle border-2",
      )}
    >
      {title && <h2 className="text-uppercase fs-6 fw-bold">{title}</h2>}
      {children}
    </section>
  );
}
