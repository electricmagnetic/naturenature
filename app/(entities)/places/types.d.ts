import type { TableRow, InsertDto } from "@/types/database";

// Supabase types
export type Place = TableRow<"places">;
export type PlaceDto = InsertDto<"places">;

// Expanded definitions (when using related lookups)
export type EventRelatedObjects = {
  place: TableRow<"places"> | null;
};

export type CompleteEvent = Event & EventRelatedObjects;
