// List of protocols, corresponds with those defined in the database dictionary

export enum Protocol {
  CITIZEN = "CITIZEN",
  GROUP = "GROUP",
  IDENTIFIER = "IDENTIFIER",
  INTERVENTION = "INTERVENTION",
  MEASUREMENT = "MEASUREMENT",
  MEDIA = "MEDIA",
  OBSERVATION = "OBSERVATION",
  PERSON = "PERSON",
  SAMPLE = "SAMPLE",
}

// Protocol metadata

export type ProtocolMetadatum = {
  name: string;
  iconName: string;
  routeId: string;
};

export const protocolMetadata: { [key in Protocol]: ProtocolMetadatum } = {
  CITIZEN: {
    name: "Citizen",
    iconName: "globe",
    routeId: "citizen",
  },
  GROUP: {
    name: "Group",
    iconName: "boxes",
    routeId: "group",
  },
  IDENTIFIER: {
    name: "Identifier",
    iconName: "circle",
    routeId: "identifier",
  },
  INTERVENTION: {
    name: "Intervention",
    iconName: "check-square",
    routeId: "intervention",
  },
  MEASUREMENT: {
    name: "Measurement",
    iconName: "rulers",
    routeId: "measurement",
  },
  MEDIA: {
    name: "Media",
    iconName: "images",
    routeId: "media",
  },
  OBSERVATION: {
    name: "Observation",
    iconName: "binoculars",
    routeId: "observation",
  },
  PERSON: {
    name: "Person",
    iconName: "people",
    routeId: "person",
  },
  SAMPLE: {
    name: "Sample",
    iconName: "file-earmark-medical",
    routeId: "sample",
  },
};
