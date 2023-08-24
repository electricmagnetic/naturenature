export type EntityMetadatum = {
  table: string;
  name: string;
  pluralName: string;
  iconName: string;
};

// A register of the different types of entities, to ensure standardisation across the app. Ordering is reflected in the interface.
const metadata: { [key: string]: EntityMetadatum } = {
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

export default metadata;
