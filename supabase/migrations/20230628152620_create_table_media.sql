-- create table

create table "public"."media" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "caption" text,
    "url" text,
    "metadata" jsonb
);

create unique index media_pkey on public.media using btree (id);

alter table "public"."media" add constraint "media_pkey" primary key using index "media_pkey";

-- security

alter table "public"."media" enable row level security;
create policy "Authenticated users can select media" on media
for select to authenticated using (true);
