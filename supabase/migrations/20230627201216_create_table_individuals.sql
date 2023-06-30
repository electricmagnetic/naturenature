create table "public"."individuals" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "name" text
);


CREATE UNIQUE INDEX individuals_pkey ON public.individuals USING btree (id);

alter table "public"."individuals" add constraint "individuals_pkey" PRIMARY KEY using index "individuals_pkey";

alter table "public"."individuals" enable row level security;
create policy "Authenticated users can select individuals" on individuals
  for select to authenticated using (true);