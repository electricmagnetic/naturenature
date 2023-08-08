import type { TableRow, InsertDto } from "@/types/database";

// Supabase types
export type Event = TableRow<"events">;
export type EventDto = InsertDto<"events">;

// Expanded definitions (when using related lookups)
export type EventRelatedObjects = {
  place: TableRow<"places"> | null;
};

export type CompleteEvent = TableRow<"events"> & EventRelatedObjects;
