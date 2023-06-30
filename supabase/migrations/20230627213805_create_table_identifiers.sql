create table "public"."identifiers" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "type" text not null,
    "name" text
);


CREATE UNIQUE INDEX identifiers_pkey ON public.identifiers USING btree (id);

alter table "public"."identifiers" add constraint "identifiers_pkey" PRIMARY KEY using index "identifiers_pkey";

alter table "public"."identifiers" enable row level security;
create policy "Authenticated users can select identifiers" on identifiers
  for select to authenticated using (true);