import type { FC } from "react";
import type { TableRow } from "./database";

// Expanded definitions (when using related lookups)
export type CompleteRecord = TableRow<"records"> & {
  event: TableRow<"events">,
  person: TableRow<"people"> | null,
  individual: TableRow<"individuals"> | null,
  object: TableRow<"objects"> | null,
  media: TableRow<"media"> | null,
}

// Type for protocol components (responsible for rendering the different protocols)
export type ProtocolComponent = { [key: string]: FC<{ record: CompleteRecord }> };

// Types for JSON fields in Records
export type ProtocolMeasurementData = {
  value: number,
  units: string,
}

export type ProtocolSampleData = {
  value: number,
  units: string,
}

export type ProtocolCitizenData = {
  banded: string,
  band_combo: string | undefined,
  life_stage_guess: string | undefined,
  sex_guess: string | undefined,
}