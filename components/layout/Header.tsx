import { PropsWithChildren } from "react";

import metadata from "@/app/(entities)/metadata";
import ActionButton from "@/components/ui/ActionButton";
import Icon from "@/components/ui/Icon";
import Toolbar from "@/components/ui/Toolbar";

export enum Action {
  Create = "Create",
  View = "View",
  Edit = "Edit",
  Delete = "Delete",
}

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
  const entityMetadata = metadata[entity];
  if (!entityMetadata) throw Error("Entity metadata not found");

  return (
    <Header
      title={`${action ? `${Action[action]} ` : ""}${
        id ? entityMetadata.name : entityMetadata.pluralName
      }`}
      iconName={entityMetadata.iconName}
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
    <div className="border-top border-bottom py-2 bg-light-subtle mb-3">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-auto">
          <h1 className="h4 my-1">
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
