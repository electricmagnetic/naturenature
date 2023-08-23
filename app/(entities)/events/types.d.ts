import type { TableRow, InsertDto } from "@/types/database";

// Supabase types
export type Event = TableRow<"events">;
export type EventDto = UpdateDto<"events">;

// Expanded definitions (when using related lookups)
export type EventRelatedObjects = {
  place: TableRow<"places"> | null;
};

export type CompleteEvent = Event & EventRelatedObjects;
