-- add numeric reference (unique non-PK identifier) to events

alter table "public"."events" add column "reference" bigint;

create unique index events_reference_key on public.events using btree (reference);

alter table "public"."events" add constraint "events_reference_key" unique using index "events_reference_key";

-- add textual reference to individuals

alter table "public"."individuals" add column "reference" text;

create unique index individuals_reference_key on public.individuals using btree (reference);

alter table "public"."individuals" add constraint "individuals_reference_key" unique using index "individuals_reference_key";
