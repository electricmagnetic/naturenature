import type { FC } from "react";

import type { UpdateDto, TableRow, InsertDto } from "@/types/database";
import type { Protocol } from "./protocols/metadata";

// Supabase types
export type Record = TableRow<"records">;
export type RecordDto = InsertDto<"records">;

// Expanded definitions (when using related lookups)
export type RecordRelatedObjects = {
  event: TableRow<"events">;
  person: TableRow<"people"> | null;
  individual: TableRow<"individuals"> | null;
  object: TableRow<"objects"> | null;
  media: TableRow<"media"> | null;
};

export type CompleteRecord = Record & RecordRelatedObjects;

// Type for protocol components (responsible for rendering the different protocols)
export type ProtocolComponents<T> = {
  [key in Protocol]: FC<T>;
};

// Types for JSON fields in Records
export type ProtocolMeasurementData = {
  value: number;
  units: string;
};

export type ProtocolSampleData = {
  value: number;
  units: string;
};

export type ProtocolCitizenData = {
  banded: string;
  band_combo: string | undefined;
  life_stage_guess: string | undefined;
  sex_guess: string | undefined;
};
