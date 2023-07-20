import type { TableRow } from "./database";

// Expanded definitions (when using related lookups)
export type CompleteRecord = TableRow<"records"> & {
  event: TableRow<"events">,
  person: TableRow<"people"> | null,
  individual: TableRow<"individuals"> | null,
  object: TableRow<"objects"> | null,
  media: TableRow<"media"> | null,
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