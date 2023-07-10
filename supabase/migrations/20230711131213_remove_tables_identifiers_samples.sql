-- remove links
alter table "public"."records" drop constraint "records_identifier_fkey";
alter table "public"."records" drop constraint "records_sample_fkey";

alter table "public"."records" drop column "identifier";
alter table "public"."records" drop column "sample";

-- remove identifiers

drop policy "Authenticated users can select identifiers" on "public"."identifiers";

alter table "public"."identifiers" drop constraint "identifiers_type_fkey";
alter table "public"."identifiers" drop constraint "identifiers_pkey";

drop index if exists "public"."identifiers_pkey";
drop index if exists "public"."idx_records_identifier";

drop table "public"."identifiers";

-- remove samples

drop policy "Authenticated users can select samples" on "public"."samples";

alter table "public"."samples" drop constraint "samples_type_fkey";
alter table "public"."samples" drop constraint "samples_pkey";

drop index if exists "public"."idx_records_sample";
drop index if exists "public"."samples_pkey";

drop table "public"."samples";
