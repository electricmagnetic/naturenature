-- renaming 'place' to 'place_id' in events table to make the distinction between the object itself and the reference clearer

alter table "public"."events" drop constraint "events_place_fkey";

drop index if exists "public"."idx_events_place";

alter table "public"."events" drop column "place";

alter table "public"."events" add column "place_id" uuid;

create index idx_events_place on public.events using btree (place_id);

alter table "public"."events" add constraint "events_place_id_fkey" foreign key (place_id) references places (id) on delete restrict not valid;

alter table "public"."events" validate constraint "events_place_id_fkey";
