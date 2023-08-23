import type { InsertDto, TableRow } from "@/types/database";

// Supabase types
export type Individual = TableRow<"individuals">;
export type IndividualDto = InsertDto<"individuals">;
