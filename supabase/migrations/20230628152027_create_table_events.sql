-- create table

create table "public"."events" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "datetime" timestamp with time zone not null,
    "attached_place_metadata" jsonb null,
    "attached_place_geography" geography null,
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

-- security

alter table "public"."events" enable row level security;
create policy "Authenticated users can select events" on events
for select to authenticated using (true);
