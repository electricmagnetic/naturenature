create table "public"."events" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "datetime" timestamp with time zone not null,
    "location_metadata" jsonb null,
    "geography" geography null,
    "place" uuid null
);


CREATE UNIQUE INDEX events_pkey ON public.events USING btree (id);

alter table "public"."events" add constraint "events_pkey" PRIMARY KEY using index "events_pkey";

alter table "public"."events" add constraint "events_place_fkey" FOREIGN KEY (place) REFERENCES places(id) ON DELETE RESTRICT not valid;
alter table "public"."events" validate constraint "events_place_fkey";

create index idx_events_place on events (place);

alter table "public"."events" enable row level security;
create policy "Authenticated users can select events" on events
  for select to authenticated using (true);