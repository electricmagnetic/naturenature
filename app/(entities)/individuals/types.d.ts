import type { TableRow, InsertDto } from "@/types/database";

// Supabase types
export type Individual = TableRow<"individuals">;
export type IndividualDto = InsertDto<"individuals">;
