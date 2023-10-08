import { Children, PropsWithChildren } from "react";

export default function ButtonCollection({ children }: PropsWithChildren) {
  return (
    <div className="row row-cols-auto g-1">
      {Children.map(
        children,
        (child) => child && <div className="col">{child}</div>,
      )}
    </div>
  );
}
