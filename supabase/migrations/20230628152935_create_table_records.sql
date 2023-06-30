-- base record

create table "public"."records" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "event" uuid not null,
    "protocol" text not null,
    "action" text null,
    "type" text null,
    "individual" uuid null
);

CREATE UNIQUE INDEX records_pkey ON public.records USING btree (id);
alter table "public"."records" add constraint "records_pkey" PRIMARY KEY using index "records_pkey";

alter table "public"."records" add constraint "records_event_fkey" FOREIGN KEY (event) REFERENCES events(id) ON DELETE RESTRICT not valid;
alter table "public"."records" validate constraint "records_event_fkey";

create index idx_records_event on records (event);

alter table "public"."records" add constraint "records_individual_fkey" FOREIGN KEY (individual) REFERENCES individuals(id) ON DELETE RESTRICT not valid;
alter table "public"."records" validate constraint "records_individual_fkey";

create index idx_records_individual on records (individual);

-- add dictionary

alter table "public"."records" add constraint "records_action_fkey" FOREIGN KEY (action) REFERENCES dictionary(id) not valid;
alter table "public"."records" validate constraint "records_action_fkey";

create index idx_records_action on records (action);

alter table "public"."records" add constraint "records_protocol_fkey" FOREIGN KEY (protocol) REFERENCES dictionary(id) not valid;
alter table "public"."records" validate constraint "records_protocol_fkey";

create index idx_records_protocol on records (protocol);

alter table "public"."records" add constraint "records_type_fkey" FOREIGN KEY (type) REFERENCES dictionary(id) not valid;
alter table "public"."records" validate constraint "records_type_fkey";

create index idx_records_type on records (type);

-- identifier

alter table "public"."records" add column "identifier" uuid null;

alter table "public"."records" add constraint "records_identifier_fkey" FOREIGN KEY (identifier) REFERENCES identifiers(id) ON DELETE RESTRICT not valid;
alter table "public"."records" validate constraint "records_identifier_fkey";

create index idx_records_identifier on records (identifier);

-- sample

alter table "public"."records" add column "sample" uuid null;

alter table "public"."records" add constraint "records_sample_fkey" FOREIGN KEY (sample) REFERENCES samples(id) ON DELETE RESTRICT not valid;
alter table "public"."records" validate constraint "records_sample_fkey";

create index idx_records_sample on records (sample);

-- person

alter table "public"."records" add column "person" uuid null;

alter table "public"."records" add constraint "records_person_fkey" FOREIGN KEY (person) REFERENCES people(id) ON DELETE RESTRICT not valid;
alter table "public"."records" validate constraint "records_person_fkey";

create index idx_records_person on records (person);

-- data

alter table "public"."records" add column "data" jsonb;

-- security

alter table "public"."records" enable row level security;
create policy "Authenticated users can select records" on records
  for select to authenticated using (true);
