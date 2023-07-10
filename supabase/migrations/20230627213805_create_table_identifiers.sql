-- create table (deprecated, replaced by objects)

create table "public"."identifiers" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "type" text not null,
    "name" text
);


create unique index identifiers_pkey on public.identifiers using btree (id);

alter table "public"."identifiers" add constraint "identifiers_pkey" primary key using index "identifiers_pkey";

alter table "public"."identifiers" add constraint "identifiers_type_fkey" foreign key (
    type
) references dictionary (id) not valid;

alter table "public"."identifiers" validate constraint "identifiers_type_fkey";

-- security

alter table "public"."identifiers" enable row level security;
create policy "Authenticated users can select identifiers" on identifiers
for select to authenticated using (true);
