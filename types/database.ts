import type { Database } from './_supabase';

// Helper functions for Supabase objects
export type TableRow<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
export type ViewRow<T extends keyof Database['public']['Views']> = Database['public']['Views'][T]['Row'];

export type InsertDto<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert'];
export type UpdateDto<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update'];

// Lookup subset (mapping ids to names)
export type LookupItem = { id: string, name: string };