-- add column 'metadata' to places

alter table "public"."places" add column "metadata" jsonb;

-- create geospatial index

create index idx_places on public.places using gist (geography);
