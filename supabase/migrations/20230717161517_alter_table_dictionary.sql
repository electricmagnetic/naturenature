-- add missing fields to dictionary

alter table "public"."dictionary" add column "type" text;
alter table "public"."dictionary" add column "description" text;
