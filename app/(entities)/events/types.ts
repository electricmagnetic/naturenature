import type { TableRow } from "@/types/database";

// Expanded definitions (when using related lookups)
export type CompleteEvent = TableRow<"events"> & {
  place: TableRow<"places"> | null;
};
