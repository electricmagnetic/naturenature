import { PropsWithChildren } from "react";
import Link from "next/link";

import Icon from "./Icon";

export default function ActionButton({
  iconName,
  href,
  children,
  ...others
}: PropsWithChildren<{ iconName: string; href: string }>) {
  return (
    <Link className="btn btn-sm btn-light" href={href} {...others}>
      <Icon iconName={iconName} />
      {children}
    </Link>
  );
}

export const CreateActionButton = ({ href, ...others }: { href: string }) => (
  <ActionButton href={href} {...others} iconName="plus-circle">
    Create
  </ActionButton>
);

export const ViewActionButton = ({ href, ...others }: { href: string }) => (
  <ActionButton href={href} {...others} iconName="eye">
    View
  </ActionButton>
);

export const EditActionButton = ({ href, ...others }: { href: string }) => (
  <ActionButton href={href} {...others} iconName="pencil-square">
    Edit
  </ActionButton>
);

export const DeleteActionButton = ({ href, ...others }: { href: string }) => (
  <ActionButton href={href} {...others} iconName="trash">
    Delete
  </ActionButton>
);
