-- create table

create table "public"."events" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "datetime" timestamp with time zone not null,
    "event_place_metadata" jsonb null,
    "event_place_geometry" geometry null,
    "place_id" uuid null,
    "comments" text null,
    "source" text null,
    "is_public" boolean not null default false,
    "status" text null
);


create unique index events_pkey on public.events using btree (id);

alter table "public"."events" add constraint "events_pkey" primary key using index "events_pkey";

-- place

alter table "public"."events" add constraint "events_place_fkey" foreign key (
    place_id
) references places (id) on delete restrict not valid;

alter table "public"."events" validate constraint "events_place_fkey";

create index idx_events_place on events (place_id);

-- status

alter table "public"."events" add constraint "events_status_fkey" foreign key (
    status
) references dictionary (id) on delete restrict not valid;

alter table "public"."events" validate constraint "events_status_fkey";

-- source

alter table "public"."events" add constraint "events_source_fkey" foreign key (
    source
) references dictionary (id) not valid;

alter table "public"."events" validate constraint "events_source_fkey";

-- geospatial

create index idx_events_event_place_geometry on public.events using gist (event_place_geometry);

-- security

alter table "public"."events" enable row level security;
create policy "Authenticated users can select events" on events
for select to authenticated using (true);
