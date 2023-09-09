import { PropsWithChildren } from "react";
import Link from "next/link";

import { getMetadatum } from "@/app/(entities)/metadata";
import Icon from "./Icon";

const ActionButton = ({
  iconName,
  href,
  children,
  ...others
}: PropsWithChildren<{ iconName: string; href: string }>) => {
  return (
    <Link className="btn btn-sm btn-outline-secondary" href={href} {...others}>
      <Icon iconName={iconName} />
      {children}
    </Link>
  );
};

type ActionButtonTable = { entity?: never; table: string };
type ActionButtonEntity = { entity: string; table?: never };

type ActionButton = ActionButtonTable | ActionButtonEntity;
type ActionButtonWithId = { id: string };

const ActionButtonCreate = ({ entity, table, ...others }: ActionButton) => (
  <ActionButton
    href={`/${entity ? getMetadatum(entity).table : table}/new`}
    {...others}
    iconName="plus-circle"
  >
    Create
  </ActionButton>
);

const ActionButtonView = ({
  entity,
  table,
  id,
  ...others
}: ActionButton & ActionButtonWithId) => (
  <ActionButton
    href={`/${entity ? getMetadatum(entity).table : table}/${id}`}
    {...others}
    iconName="eye"
  >
    View
  </ActionButton>
);

const ActionButtonEdit = ({
  entity,
  table,
  id,
  ...others
}: ActionButton & ActionButtonWithId) => (
  <ActionButton
    href={`/${entity ? getMetadatum(entity).table : table}/${id}/edit`}
    {...others}
    iconName="pencil-square"
  >
    Edit
  </ActionButton>
);

const ActionButtonDelete = ({
  entity,
  table,
  id,
  ...others
}: ActionButton & ActionButtonWithId) => (
  <ActionButton
    href={`/${entity ? getMetadatum(entity).table : table}/${id}/delete`}
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
