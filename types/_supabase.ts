export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      dictionary: {
        Row: {
          class: string
          description: string | null
          id: string
          name: string | null
          type: string | null
        }
        Insert: {
          class: string
          description?: string | null
          id: string
          name?: string | null
          type?: string | null
        }
        Update: {
          class?: string
          description?: string | null
          id?: string
          name?: string | null
          type?: string | null
        }
        Relationships: []
      }
      events: {
        Row: {
          comments: string | null
          created_at: string | null
          datetime: string
          event_place_geometry: unknown | null
          event_place_metadata: Json | null
          id: string
          is_public: boolean
          place_id: string | null
          reference: number | null
          source: string | null
          status: string | null
        }
        Insert: {
          comments?: string | null
          created_at?: string | null
          datetime: string
          event_place_geometry?: unknown | null
          event_place_metadata?: Json | null
          id?: string
          is_public?: boolean
          place_id?: string | null
          reference?: number | null
          source?: string | null
          status?: string | null
        }
        Update: {
          comments?: string | null
          created_at?: string | null
          datetime?: string
          event_place_geometry?: unknown | null
          event_place_metadata?: Json | null
          id?: string
          is_public?: boolean
          place_id?: string | null
          reference?: number | null
          source?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_place_id_fkey"
            columns: ["place_id"]
            referencedRelation: "places"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_source_fkey"
            columns: ["source"]
            referencedRelation: "dictionary"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_status_fkey"
            columns: ["status"]
            referencedRelation: "dictionary"
            referencedColumns: ["id"]
          }
        ]
      }
      individuals: {
        Row: {
          created_at: string | null
          id: string
          name: string | null
          reference: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name?: string | null
          reference?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string | null
          reference?: string | null
        }
        Relationships: []
      }
      media: {
        Row: {
          caption: string | null
          created_at: string | null
          id: string
          metadata: Json | null
          url: string | null
        }
        Insert: {
          caption?: string | null
          created_at?: string | null
          id?: string
          metadata?: Json | null
          url?: string | null
        }
        Update: {
          caption?: string | null
          created_at?: string | null
          id?: string
          metadata?: Json | null
          url?: string | null
        }
        Relationships: []
      }
      objects: {
        Row: {
          class: string
          created_at: string | null
          data: Json | null
          id: string
          name: string | null
          type: string
        }
        Insert: {
          class: string
          created_at?: string | null
          data?: Json | null
          id?: string
          name?: string | null
          type: string
        }
        Update: {
          class?: string
          created_at?: string | null
          data?: Json | null
          id?: string
          name?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "objects_class_fkey"
            columns: ["class"]
            referencedRelation: "dictionary"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "objects_type_fkey"
            columns: ["type"]
            referencedRelation: "dictionary"
            referencedColumns: ["id"]
          }
        ]
      }
      people: {
        Row: {
          created_at: string | null
          id: string
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "people_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      places: {
        Row: {
          created_at: string | null
          fts: unknown | null
          geometry: unknown
          id: string
          metadata: Json | null
          name: string
          type: string
        }
        Insert: {
          created_at?: string | null
          fts?: unknown | null
          geometry: unknown
          id?: string
          metadata?: Json | null
          name: string
          type: string
        }
        Update: {
          created_at?: string | null
          fts?: unknown | null
          geometry?: unknown
          id?: string
          metadata?: Json | null
          name?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "places_type_fkey"
            columns: ["type"]
            referencedRelation: "dictionary"
            referencedColumns: ["id"]
          }
        ]
      }
      records: {
        Row: {
          action: string | null
          created_at: string | null
          data: Json | null
          event_id: string
          id: string
          individual_id: string | null
          media_id: string | null
          object_id: string | null
          person_id: string | null
          protocol: string
          type: string | null
        }
        Insert: {
          action?: string | null
          created_at?: string | null
          data?: Json | null
          event_id: string
          id?: string
          individual_id?: string | null
          media_id?: string | null
          object_id?: string | null
          person_id?: string | null
          protocol: string
          type?: string | null
        }
        Update: {
          action?: string | null
          created_at?: string | null
          data?: Json | null
          event_id?: string
          id?: string
          individual_id?: string | null
          media_id?: string | null
          object_id?: string | null
          person_id?: string | null
          protocol?: string
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "records_action_fkey"
            columns: ["action"]
            referencedRelation: "dictionary"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_event_id_fkey"
            columns: ["event_id"]
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_individual_id_fkey"
            columns: ["individual_id"]
            referencedRelation: "individuals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_media_id_fkey"
            columns: ["media_id"]
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_object_id_fkey"
            columns: ["object_id"]
            referencedRelation: "objects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_person_id_fkey"
            columns: ["person_id"]
            referencedRelation: "people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_protocol_fkey"
            columns: ["protocol"]
            referencedRelation: "dictionary"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_type_fkey"
            columns: ["type"]
            referencedRelation: "dictionary"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      names: {
        Row: {
          id: string | null
          name: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
