import type EntityMetadatum from "@/types/EntityMetadata";

// A register of the different types of entities, to ensure standardisation across the app
const metadata: { [key: string]: EntityMetadatum } = {
  event: {
    table: "events",
    name: "Event",
    pluralName: "Events",
    iconName: "calendar",
  },
  individual: {
    table: "individuals",
    name: "Individual",
    pluralName: "Individuals",
    iconName: "bullseye",
  },
  media: {
    table: "media",
    name: "Media",
    pluralName: "Media",
    iconName: "images",
  },
  object: {
    table: "objects",
    name: "Object",
    pluralName: "Objects",
    iconName: "box-seam",
  },
  person: {
    table: "people",
    name: "Person",
    pluralName: "People",
    iconName: "people",
  },
  place: {
    table: "places",
    name: "Place",
    pluralName: "Places",
    iconName: "geo-alt",
  },
  record: {
    table: "records",
    name: "Record",
    pluralName: "Records",
    iconName: "database",
  },
};

export default metadata;
