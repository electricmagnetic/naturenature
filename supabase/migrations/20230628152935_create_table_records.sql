-- create table

create table "public"."records" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "event_id" uuid not null,
    "protocol" text not null,
    "action" text null,
    "type" text null,
    "individual_id" uuid null,
    "person_id" uuid null,
    "object_id" uuid null,
    "media_id" uuid null
);

create unique index records_pkey on public.records using btree (id);
alter table "public"."records" add constraint "records_pkey" primary key using index "records_pkey";

alter table "public"."records" add constraint "records_event_fkey" foreign key (
    event_id
) references events (id) on delete restrict not valid;
alter table "public"."records" validate constraint "records_event_fkey";

create index idx_records_event on records (event_id);

-- add dictionary

alter table "public"."records" add constraint "records_action_fkey" foreign key (
    action
) references dictionary (id) not valid;
alter table "public"."records" validate constraint "records_action_fkey";

create index idx_records_action on records (action);

alter table "public"."records" add constraint "records_protocol_fkey" foreign key (
    protocol
) references dictionary (id) not valid;
alter table "public"."records" validate constraint "records_protocol_fkey";

create index idx_records_protocol on records (protocol);

alter table "public"."records" add constraint "records_type_fkey" foreign key (
    type
) references dictionary (id) not valid;
alter table "public"."records" validate constraint "records_type_fkey";

create index idx_records_type on records (type);

-- individual

alter table "public"."records" add constraint "records_individual_fkey" foreign key (
    individual_id
) references individuals (id) on delete restrict not valid;

alter table "public"."records" validate constraint "records_individual_fkey";

create index idx_records_individual on records (individual_id);

-- person

alter table "public"."records" add constraint "records_person_fkey" foreign key (
    person_id
) references people (id) on delete restrict not valid;

alter table "public"."records" validate constraint "records_person_fkey";

create index idx_records_person on records (person_id);

-- object

alter table "public"."records" add constraint "records_object_fkey" foreign key (
    object_id
) references objects (id) on delete restrict not valid;

alter table "public"."records" validate constraint "records_object_fkey";

create index idx_records_object on records (object_id);

-- media

alter table "public"."records" add constraint "records_media_fkey" foreign key (
    media_id
) references media (id) on delete restrict not valid;

alter table "public"."records" validate constraint "records_media_fkey";

create index idx_records_media on records (media_id);


-- data

alter table "public"."records" add column "data" jsonb;

-- security

alter table "public"."records" enable row level security;
create policy "Authenticated users can select records" on records
for select to authenticated using (true);
