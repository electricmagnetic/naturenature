import { Protocol, protocolMetadata } from "./metadata";

export const isProtocol = (value: string): value is Protocol =>
  Object.keys(protocolMetadata).includes(value);
