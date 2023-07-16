import type EntityMetadatum from "@/types/EntityMetadata";

// A register of the different types of entities, to ensure standardisation across the app
const metadata: { [key: string]: EntityMetadatum } = {
  event: {
    name: "Event",
    pluralName: "Events",
    iconName: "calendar",
    baseLink: "/events",
  },
  individual: {
    name: "Individual",
    pluralName: "Individuals",
    iconName: "bullseye",
    baseLink: "/individuals",
  },
  object: {
    name: "Object",
    pluralName: "Objects",
    iconName: "box-seam",
    baseLink: "/objects",
  },
  person: {
    name: "Person",
    pluralName: "People",
    iconName: "people",
    baseLink: "/people",
  },
  place: {
    name: "Place",
    pluralName: "Places",
    iconName: "geo-alt",
    baseLink: "/places",
  },
  record: {
    name: "Record",
    pluralName: "Records",
    iconName: "database",
    baseLink: "/records",
  },
};

export default metadata;
