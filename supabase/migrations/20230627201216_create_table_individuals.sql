-- create table

create table "public"."individuals" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "name" text
);


create unique index individuals_pkey on public.individuals using btree (id);

alter table "public"."individuals" add constraint "individuals_pkey" primary key using index "individuals_pkey";

-- security

alter table "public"."individuals" enable row level security;
create policy "Authenticated users can select individuals" on individuals
for select to authenticated using (true);
