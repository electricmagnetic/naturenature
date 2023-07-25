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

type ActionButtonCreateProps = { entity: string };
type ActionButtonBaseProps = { table: string; id: string };

const ActionButtonCreate = ({ entity, ...others }: ActionButtonCreateProps) => (
  <ActionButton href={`/create/${entity}`} {...others} iconName="plus-circle">
    Create
  </ActionButton>
);

const ActionButtonView = ({ table, id, ...others }: ActionButtonBaseProps) => (
  <ActionButton href={`/${table}/${id}`} {...others} iconName="eye">
    View
  </ActionButton>
);

const ActionButtonEdit = ({ table, id, ...others }: ActionButtonBaseProps) => (
  <ActionButton
    href={`/${table}/${id}/edit`}
    {...others}
    iconName="pencil-square"
  >
    Edit
  </ActionButton>
);

const ActionButtonDelete = ({
  table,
  id,
  ...others
}: ActionButtonBaseProps) => (
  <ActionButton href={`/${table}/${id}/delete`} {...others} iconName="trash">
    Delete
  </ActionButton>
);

ActionButton.Create = ActionButtonCreate;
ActionButton.View = ActionButtonView;
ActionButton.Edit = ActionButtonEdit;
ActionButton.Delete = ActionButtonDelete;

export default ActionButton;
