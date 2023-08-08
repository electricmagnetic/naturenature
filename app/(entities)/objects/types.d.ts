import type { TableRow, InsertDto } from "@/types/database";

// Supabase types
export type Object = TableRow<"objects">;
export type ObjectDto = InsertDto<"objects">;
