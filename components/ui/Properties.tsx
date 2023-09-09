import { PropsWithChildren } from "react";

const PropertiesItem = ({
  name,
  children,
}: PropsWithChildren<{ name: string }>) => (
  <div className="col">
    <dt>{name}</dt>
    <dd className="m-0">{children || "-"}</dd>
  </div>
);

const Properties = ({ children }: PropsWithChildren) => (
  <dl className="row row-cols-auto g-3 mb-0">{children}</dl>
);

Properties.Item = PropertiesItem;

export default Properties;
