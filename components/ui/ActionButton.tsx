import { PropsWithChildren } from "react";
import Link from "next/link";

import metadata from "@/app/(entities)/metadata";
import Icon from "./Icon";

const ActionButton = ({
  iconName,
  href,
  children,
  ...others
}: PropsWithChildren<{ iconName: string; href: string }>) => {
  return (
    <Link className="btn btn-sm btn-light" href={href} {...others}>
      <Icon iconName={iconName} />
      {children}
    </Link>
  );
};

type ActionButtonBaseProps = { entity: string; id: string };
type ActionButtonCreateProps = Omit<ActionButtonBaseProps, "id">;

const ActionButtonCreate = ({ entity, ...others }: ActionButtonCreateProps) => (
  <ActionButton href={`/create/${entity}`} {...others} iconName="plus-circle">
    Create
  </ActionButton>
);

const ActionButtonView = ({ entity, id, ...others }: ActionButtonBaseProps) => (
  <ActionButton
    href={`${metadata[entity].baseLink}/${id}`}
    {...others}
    iconName="eye"
  >
    View
  </ActionButton>
);

const ActionButtonEdit = ({ entity, id, ...others }: ActionButtonBaseProps) => (
  <ActionButton
    href={`${metadata[entity].baseLink}/${id}/edit`}
    {...others}
    iconName="pencil-square"
  >
    Edit
  </ActionButton>
);

const ActionButtonDelete = ({
  entity,
  id,
  ...others
}: ActionButtonBaseProps) => (
  <ActionButton
    href={`${metadata[entity].baseLink}/${id}/delete`}
    {...others}
    iconName="trash"
  >
    Delete
  </ActionButton>
);

ActionButton.Create = ActionButtonCreate;
ActionButton.View = ActionButtonView;
ActionButton.Edit = ActionButtonEdit;
ActionButton.Delete = ActionButtonDelete;

export default ActionButton;
