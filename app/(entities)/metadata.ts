// List of entities, corresponds with entities (singluar) defined in database tables (plural)

export enum Entity {
  event = "event",
  record = "record",
  individual = "individual",
  object = "object",
  place = "place",
  media = "media",
  person = "person",
}

export type EntityMetadatum = {
  table: string;
  name: string;
  pluralName: string;
  iconName: string;
};

export const entityMetadata: { [key in Entity]: EntityMetadatum } = {
  event: {
    table: "events",
    name: "Event",
    pluralName: "Events",
    iconName: "calendar",
  },
  record: {
    table: "records",
    name: "Record",
    pluralName: "Records",
    iconName: "database",
  },
  individual: {
    table: "individuals",
    name: "Individual",
    pluralName: "Individuals",
    iconName: "bullseye",
  },
  object: {
    table: "objects",
    name: "Object",
    pluralName: "Objects",
    iconName: "box-seam",
  },
  place: {
    table: "places",
    name: "Place",
    pluralName: "Places",
    iconName: "geo-alt",
  },
  media: {
    table: "media",
    name: "Media",
    pluralName: "Media",
    iconName: "images",
  },
  person: {
    table: "people",
    name: "Person",
    pluralName: "People",
    iconName: "people",
  },
};

export const getMetadatum = (entity: string) =>
  entityMetadata[entity as Entity];
export const getMetadatumByTable = (table: string) =>
  Object.values(entityMetadata).filter(
    (metadatum) => table === metadatum.table,
  )[0];
