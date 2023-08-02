-- create table

create table "public"."events" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "datetime" timestamp with time zone not null,
    "event_place_metadata" jsonb null,
    "event_place_geojson" jsonb null,
    "place" uuid null,
    "comments" text null
);


create unique index events_pkey on public.events using btree (id);

alter table "public"."events" add constraint "events_pkey" primary key using index "events_pkey";

alter table "public"."events" add constraint "events_place_fkey" foreign key (
    place
) references places (id) on delete restrict not valid;
alter table "public"."events" validate constraint "events_place_fkey";

create index idx_events_place on events (place);

-- geospatial

alter table "public"."events" add column "event_place_as_geometry" geometry generated always as (
    (st_geomfromgeojson(event_place_geojson))::geometry
) stored;

create index idx_events_event_place_as_geometry on public.events using gist (event_place_as_geometry);

-- security

alter table "public"."events" enable row level security;
create policy "Authenticated users can select events" on events
for select to authenticated using (true);
