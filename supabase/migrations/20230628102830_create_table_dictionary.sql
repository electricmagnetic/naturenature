create table "public"."dictionary" (
    "id" text not null,
    "type" text not null,
    "name" text
);


alter table "public"."dictionary" enable row level security;

CREATE UNIQUE INDEX dictionary_pkey ON public.dictionary USING btree (id);

alter table "public"."dictionary" add constraint "dictionary_pkey" PRIMARY KEY using index "dictionary_pkey";

-- security

alter table "public"."dictionary" enable row level security;
create policy "Dictionary is viewable by everyone." on dictionary
  for select using (true);