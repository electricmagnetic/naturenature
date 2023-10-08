import clsx from "clsx";
import Link from "next/link";

import { getMetadatum } from "@/app/(entities)/metadata";
import Icon from "./Icon";

const ActionButton = ({
  iconName,
  href,
  label,
  small,
  ...others
}: {
  iconName: string;
  href: string;
  label: string;
  small?: boolean;
}) => {
  return (
    <Link
      className={clsx("btn btn-outline-secondary", small ? "btn-xs" : "btn-sm")}
      href={href}
      {...others}
    >
      {small ? (
        <Icon iconName={iconName} label={label} />
      ) : (
        <>
          <Icon iconName={iconName} />
          {label}
        </>
      )}
    </Link>
  );
};

type ActionButtonTable = { entity?: never; table: string };
type ActionButtonEntity = { entity: string; table?: never };

type ActionButton = { small?: boolean } & (
  | ActionButtonTable
  | ActionButtonEntity
);
type ActionButtonWithId = { id: string };

const ActionButtonCreate = ({ entity, table, ...others }: ActionButton) => (
  <ActionButton
    href={`/${entity ? getMetadatum(entity).table : table}/new`}
    {...others}
    iconName="plus-circle"
    label="Create"
  />
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
    label="View"
  />
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
    label="Edit"
  />
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
    label="Delete"
  />
);

ActionButton.Create = ActionButtonCreate;
ActionButton.View = ActionButtonView;
ActionButton.Edit = ActionButtonEdit;
ActionButton.Delete = ActionButtonDelete;

export default ActionButton;
