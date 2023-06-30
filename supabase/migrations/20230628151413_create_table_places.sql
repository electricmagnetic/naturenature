-- create table

create table "public"."places" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "type" text not null,
    "name" text not null,
    "geography" geography not null
);


create unique index places_pkey on public.places using btree (id);

alter table "public"."places" add constraint "places_pkey" primary key using index "places_pkey";

create index idx_places_geo on "public"."places" using gist (geography);

alter table "public"."places" add constraint "places_type_fkey" foreign key (
    type
) references dictionary (id) not valid;

alter table "public"."places" validate constraint "places_type_fkey";

-- security

alter table "public"."places" enable row level security;
create policy "Authenticated users can select places" on places
for select to authenticated using (true);
