import { PropsWithChildren } from "react";
import Link from "next/link";

import Icon from "./Icon";

const ToolbarLink = ({
  iconName,
  href,
  children,
  ...others
}: PropsWithChildren<{ iconName: string; href: string }>) => (
  <Link className="btn btn-sm btn-light" href={href} {...others}>
    <Icon iconName={iconName} />
    {children}
  </Link>
);

const Toolbar = ({ children }: PropsWithChildren) => <>{children}</>;

Toolbar.Link = ToolbarLink;

export default Toolbar;
