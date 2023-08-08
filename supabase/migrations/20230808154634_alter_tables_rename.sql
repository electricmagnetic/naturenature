-- drop policy "Allow anonymous users to view public records (via events)" on "public"."records";

-- alter table "public"."records" drop constraint "records_event_fkey";

-- alter table "public"."records" drop constraint "records_individual_fkey";

-- alter table "public"."records" drop constraint "records_media_fkey";

-- alter table "public"."records" drop constraint "records_object_fkey";

-- alter table "public"."records" drop constraint "records_person_fkey";

--alter table "public"."people" drop constraint "people_user_fkey";

--alter table "public"."people" drop constraint "people_user_key";

-- drop index if exists "public"."people_user_key";

--alter table "public"."people" drop column "user";

--alter table "public"."people" add column "user_id" uuid;

-- create unique index people_user_key on public.people using btree (user_id);

-- alter table "public"."people" add constraint "people_user_id_fkey" foreign key (user_id) references auth.users (id) on delete set null not valid;

-- alter table "public"."people" validate constraint "people_user_id_fkey";

-- alter table "public"."people" add constraint "people_user_key" unique using index "people_user_key";

-- drop view if exists "public"."names";

-- drop index if exists "public"."idx_records_event";

-- drop index if exists "public"."idx_records_individual";

-- drop index if exists "public"."idx_records_media";

-- drop index if exists "public"."idx_records_object";

-- drop index if exists "public"."idx_records_person";

-- alter table "public"."records" drop column "event";

-- alter table "public"."records" drop column "individual";

-- alter table "public"."records" drop column "media";

-- alter table "public"."records" drop column "object";

-- alter table "public"."records" drop column "person";

-- alter table "public"."records" add column "event_id" uuid not null;

-- alter table "public"."records" add column "individual_id" uuid;

-- alter table "public"."records" add column "media_id" uuid;

-- alter table "public"."records" add column "object_id" uuid;

-- alter table "public"."records" add column "person_id" uuid;

-- create index idx_records_event on public.records using btree (event_id);

-- create index idx_records_individual on public.records using btree (individual_id);

-- create index idx_records_media on public.records using btree (media_id);

-- create index idx_records_object on public.records using btree (object_id);

-- create index idx_records_person on public.records using btree (person_id);

-- alter table "public"."records" add constraint "records_event_id_fkey" foreign key (event_id) references events (id) on delete restrict not valid;

-- alter table "public"."records" validate constraint "records_event_id_fkey";

-- alter table "public"."records" add constraint "records_individual_id_fkey" foreign key (individual_id) references individuals (id) on delete restrict not valid;

-- alter table "public"."records" validate constraint "records_individual_id_fkey";

-- alter table "public"."records" add constraint "records_media_id_fkey" foreign key (media_id) references media (id) on delete restrict not valid;

-- alter table "public"."records" validate constraint "records_media_id_fkey";

-- alter table "public"."records" add constraint "records_object_id_fkey" foreign key (object_id) references objects (id) on delete restrict not valid;

-- alter table "public"."records" validate constraint "records_object_id_fkey";

-- alter table "public"."records" add constraint "records_person_id_fkey" foreign key (person_id) references people (id) on delete restrict not valid;

-- alter table "public"."records" validate constraint "records_person_id_fkey";


create or replace view "public"."names" as select
    individuals.id,
    individuals.name
from individuals
union all
select
    objects.id,
    objects.name
from objects
union all
select
    people.id,
    people.name
from people
union all
select
    places.id,
    places.name
from places;


-- create policy "Allow anonymous users to view public records (via events)"
-- on "public"."records"
-- as permissive
-- for select
-- to anon
-- using ((exists (
--     select
--     from events
--     where ((events.id = records.event_id) and (events.is_public = true))
-- )));
