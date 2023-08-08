-- create table

create table "public"."objects" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "class" text not null,
    "type" text not null,
    "data" jsonb null,
    "name" text
);


create unique index objects_pkey on public.objects using btree (id);

alter table "public"."objects" add constraint "objects_pkey" primary key using index "objects_pkey";

alter table "public"."objects" add constraint "objects_class_fkey" foreign key (
    class
) references dictionary (id) not valid;

alter table "public"."objects" validate constraint "objects_class_fkey";

alter table "public"."objects" add constraint "objects_type_fkey" foreign key (
    type
) references dictionary (id) not valid;

alter table "public"."objects" validate constraint "objects_type_fkey";

-- security

alter table "public"."objects" enable row level security;
create policy "Authenticated users can select objects" on objects
for select to authenticated using (true);
