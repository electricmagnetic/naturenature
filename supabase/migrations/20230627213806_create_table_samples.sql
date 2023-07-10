-- create table (deprecated, replaced by objects)

create table "public"."samples" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "type" text not null,
    "name" text
);


create unique index samples_pkey on public.samples using btree (id);

alter table "public"."samples" add constraint "samples_pkey" primary key using index "samples_pkey";

alter table "public"."samples" add constraint "samples_type_fkey" foreign key (
    type
) references dictionary (id) not valid;

alter table "public"."samples" validate constraint "samples_type_fkey";

-- security

alter table "public"."samples" enable row level security;
create policy "Authenticated users can select samples" on samples
for select to authenticated using (true);
