import type { TableRow, InsertDto } from "@/types/database";

// Supabase types
export type Person = TableRow<"people">;
export type PersonDto = InsertDto<"people">;
