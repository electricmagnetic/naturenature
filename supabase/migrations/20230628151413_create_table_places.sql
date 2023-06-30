create table "public"."places" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "type" text not null,
    "name" text not null,
    "geography" geography not null
);


CREATE UNIQUE INDEX places_pkey ON public.places USING btree (id);

alter table "public"."places" add constraint "places_pkey" PRIMARY KEY using index "places_pkey";

CREATE INDEX idx_places_geo on "public"."places" using GIST (geography);

-- security

alter table "public"."places" enable row level security;
create policy "Authenticated users can select places" on places
  for select to authenticated using (true);