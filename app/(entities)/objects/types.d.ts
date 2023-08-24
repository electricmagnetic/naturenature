import type { InsertDto, TableRow } from "@/types/database";

// Supabase types
export type Object = TableRow<"objects">;
export type ObjectDto = InsertDto<"objects">;
