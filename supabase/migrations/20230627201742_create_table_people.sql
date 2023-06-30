create table "public"."people" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "name" text not null
);


CREATE UNIQUE INDEX people_pkey ON public.people USING btree (id);

alter table "public"."people" add constraint "people_pkey" PRIMARY KEY using index "people_pkey";

alter table "public"."people" enable row level security;
create policy "Authenticated users can select people" on people
  for select to authenticated using (true);