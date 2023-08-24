export type ProtocolMetadatum = {
  name: string;
  iconName: string;
  dictionaryId: string;
};

const metadata: { [key: string]: ProtocolMetadatum } = {
  citizen: {
    name: "Citizen",
    iconName: "globe",
    dictionaryId: "CITIZEN",
  },
  group: {
    name: "Group",
    iconName: "boxes",
    dictionaryId: "GROUP",
  },
  identifier: {
    name: "Identifier",
    iconName: "circle",
    dictionaryId: "IDENTIFIER",
  },
  intervention: {
    name: "Intervention",
    iconName: "check-square",
    dictionaryId: "INTERVENTION",
  },
  measurement: {
    name: "Measurement",
    iconName: "rulers",
    dictionaryId: "MEASUREMENT",
  },
  media: {
    name: "Media",
    iconName: "images",
    dictionaryId: "MEDIA",
  },
  observation: {
    name: "Observation",
    iconName: "binoculars",
    dictionaryId: "OBSERVATION",
  },
  person: {
    name: "Person",
    iconName: "people",
    dictionaryId: "PERSON",
  },
  sample: {
    name: "Sample",
    iconName: "file-earmark-medical",
    dictionaryId: "SAMPLE",
  },
};

export default metadata;
