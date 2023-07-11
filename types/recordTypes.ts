import type { Row } from "./database";

// Expanded definitions (when using related lookups)
export type CompleteRecord = Row<"records"> & {
  event: Row<"events">,
  person: Row<"people"> | null,
  individual: Row<"individuals"> | null,
  object: Row<"objects"> | null,
}

// Types for JSON fields in Records
export type ProtocolMeasurementData = {
  value: number,
  units: string,
}

export type ProtocolSampleData = {
  value: number,
  units: string,
}