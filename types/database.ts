import type { Database } from './_supabase';

// Helper functions for Supabase objects
export type Row<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
export type InsertDto<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert'];
export type UpdateDto<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update'];

// Remove auto-generated fields from type (for yup validation)
export type ValidationDto<T> = Omit<T, "created_at" | "id">;