import { PropsWithChildren } from "react";
import Link from "next/link";

const ToolbarLink = ({
  iconName,
  href,
  children,
  ...others
}: PropsWithChildren<{ iconName: string; href: string }>) => (
  <Link className="btn btn-sm btn-light me-2" href={href} {...others}>
    <i className={`bi bi-${iconName}`}></i>
    {children}
  </Link>
);

const Toolbar = ({ children }: PropsWithChildren) => (
  <div className="card mb-3">
    <div className="card-body">{children}</div>
  </div>
);

Toolbar.Link = ToolbarLink;

export default Toolbar;
