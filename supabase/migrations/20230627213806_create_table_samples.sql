create table "public"."samples" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "type" text not null,
    "name" text
);


CREATE UNIQUE INDEX samples_pkey ON public.samples USING btree (id);

alter table "public"."samples" add constraint "samples_pkey" PRIMARY KEY using index "samples_pkey";

alter table "public"."samples" enable row level security;
create policy "Authenticated users can select samples" on samples
  for select to authenticated using (true);