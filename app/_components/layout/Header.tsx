import { PropsWithChildren } from "react";

import { EntityMetadatum, getMetadatum } from "@/app/(entities)/metadata";
import ActionButton from "@/app/_components/ui/ActionButton";
import ButtonCollection from "../ui/ButtonCollection";
import Icon from "@/app/_components/ui/Icon";

export enum Action {
  Create = "Create",
  View = "View",
  Edit = "Edit",
  Delete = "Delete",
}

const getTitle = (
  entityMetadatum: EntityMetadatum,
  action?: string,
): string => {
  switch (action) {
    case Action.Create:
    case Action.View:
    case Action.Edit:
    case Action.Delete:
      return `${Action[action]} ${entityMetadatum.name}`;
    default:
      return `${entityMetadatum.pluralName}`;
  }
};

/**
 * Header specifically for entities (automatically figures out title and icon from metadata)
 */
const HeaderEntity = ({
  entity,
  id,
  action,
  actionButtons,
  children,
}: PropsWithChildren<{
  entity: string;
  id?: string;
  action?: Action;
  actionButtons?: Action[];
}>) => {
  const entityMetadatum = getMetadatum(entity);

  return (
    <Header
      title={getTitle(entityMetadatum, action)}
      iconName={entityMetadatum.iconName}
    >
      {actionButtons && (
        <ButtonCollection>
          {actionButtons.includes(Action.Create) && (
            <ActionButton.Create entity={entity} />
          )}
          {actionButtons.includes(Action.View) && id && (
            <ActionButton.View entity={entity} id={id} />
          )}
          {actionButtons.includes(Action.Edit) && id && (
            <ActionButton.Edit entity={entity} id={id} />
          )}
          {actionButtons.includes(Action.Delete) && id && (
            <ActionButton.Delete entity={entity} id={id} />
          )}
        </ButtonCollection>
      )}
      {children}
    </Header>
  );
};

/**
 * Standard header with optional icon
 */
const Header = ({
  title,
  iconName,
  children,
}: PropsWithChildren<{ title: string; iconName?: string }>) => {
  return (
    <div className="mb-3">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-auto">
          <h1 className="my-1">
            {iconName && <Icon iconName={iconName} />}
            {title}
          </h1>
        </div>
        <div className="col-md-auto">{children}</div>
      </div>
    </div>
  );
};

Header.Entity = HeaderEntity;
Header.Action = Action;

export default Header;
