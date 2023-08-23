import type { InsertDto, TableRow } from "@/types/database";

// Supabase types
export type Media = TableRow<"media">;
export type MediaDto = InsertDto<"media">;
