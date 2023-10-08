import type { FC } from "react";
import type { ZodSchema } from "zod";

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
export type ProtocolComponents<T = void> = {
  [key in Protocol]: (T?) => JSX.Element;
};

export type ProtocolSchemas = {
  [key in Protocol]: ZodSchema;
};

// Protocol Detail Components
export type ProtocolDetailComponents = ProtocolComponents<{
  record: CompleteRecord;
}>;
