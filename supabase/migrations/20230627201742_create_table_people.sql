-- create table

create table "public"."people" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "name" text not null
);


create unique index people_pkey on public.people using btree (id);

alter table "public"."people" add constraint "people_pkey" primary key using index "people_pkey";

-- security

alter table "public"."people" enable row level security;
create policy "Authenticated users can select people" on people
for select to authenticated using (true);
