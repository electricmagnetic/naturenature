import { PropsWithChildren } from "react";

import metadata from "@/app/(entities)/metadata";
import Icon from "@/components/ui/Icon";

/**
 * Header specifically for entities (automatically figures out title and icon from metadata)
 */
const HeaderEntity = ({
  entity,
  children,
}: PropsWithChildren<{ entity: string }>) => {
  const entityMetadata = metadata[entity];
  if (!entityMetadata) throw Error("Entity metadata not found");

  return (
    <Header
      title={entityMetadata.pluralName}
      iconName={entityMetadata.iconName}
    >
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

export default Header;
