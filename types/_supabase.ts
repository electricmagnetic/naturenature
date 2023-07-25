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
          event_place_as_geojson: Json | null
          event_place_geography: unknown | null
          event_place_metadata: Json | null
          id: string
          is_public: boolean
          place: string | null
          source: string | null
          status: string | null
        }
        Insert: {
          comments?: string | null
          created_at?: string | null
          datetime: string
          event_place_as_geojson?: Json | null
          event_place_geography?: unknown | null
          event_place_metadata?: Json | null
          id?: string
          is_public?: boolean
          place?: string | null
          source?: string | null
          status?: string | null
        }
        Update: {
          comments?: string | null
          created_at?: string | null
          datetime?: string
          event_place_as_geojson?: Json | null
          event_place_geography?: unknown | null
          event_place_metadata?: Json | null
          id?: string
          is_public?: boolean
          place?: string | null
          source?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_place_fkey"
            columns: ["place"]
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
        }
        Insert: {
          created_at?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string | null
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
          user: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          user?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "people_user_fkey"
            columns: ["user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      places: {
        Row: {
          as_geojson: Json | null
          created_at: string | null
          geography: unknown
          id: string
          metadata: Json | null
          name: string
          type: string
        }
        Insert: {
          as_geojson?: Json | null
          created_at?: string | null
          geography: unknown
          id?: string
          metadata?: Json | null
          name: string
          type: string
        }
        Update: {
          as_geojson?: Json | null
          created_at?: string | null
          geography?: unknown
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
          event: string
          id: string
          individual: string | null
          media: string | null
          object: string | null
          person: string | null
          protocol: string
          type: string | null
        }
        Insert: {
          action?: string | null
          created_at?: string | null
          data?: Json | null
          event: string
          id?: string
          individual?: string | null
          media?: string | null
          object?: string | null
          person?: string | null
          protocol: string
          type?: string | null
        }
        Update: {
          action?: string | null
          created_at?: string | null
          data?: Json | null
          event?: string
          id?: string
          individual?: string | null
          media?: string | null
          object?: string | null
          person?: string | null
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
            foreignKeyName: "records_event_fkey"
            columns: ["event"]
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_individual_fkey"
            columns: ["individual"]
            referencedRelation: "individuals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_media_fkey"
            columns: ["media"]
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_object_fkey"
            columns: ["object"]
            referencedRelation: "objects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "records_person_fkey"
            columns: ["person"]
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
      [_ in never]: never
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
