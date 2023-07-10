-- add missing fields to objects

alter table "public"."objects" add column "data" jsonb;
alter table "public"."objects" add column "name" text;
