import { PropsWithChildren } from "react";

import metadata, { EntityMetadatum } from "@/app/(entities)/metadata";
import ActionButton from "@/components/ui/ActionButton";
import Icon from "@/components/ui/Icon";
import Toolbar from "@/components/ui/Toolbar";

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
  const entityMetadatum = metadata[entity];
  if (!entityMetadatum) throw Error("Entity metadata not found");

  return (
    <Header
      title={getTitle(entityMetadatum, action)}
      iconName={entityMetadatum.iconName}
    >
      {actionButtons && (
        <Toolbar>
          {actionButtons.includes(Action.Create) && (
            <ActionButton.Create entity={entity} />
          )}
          {id && (
            <>
              {actionButtons.includes(Action.View) && (
                <ActionButton.View entity={entity} id={id} />
              )}
              {actionButtons.includes(Action.Edit) && (
                <ActionButton.Edit entity={entity} id={id} />
              )}
              {actionButtons.includes(Action.Delete) && (
                <ActionButton.Delete entity={entity} id={id} />
              )}
            </>
          )}
        </Toolbar>
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
