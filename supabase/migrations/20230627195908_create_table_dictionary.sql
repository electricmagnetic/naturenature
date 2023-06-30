-- create table

create table "public"."dictionary" (
    "id" text not null,
    "type" text not null,
    "name" text
);


create unique index dictionary_pkey on public.dictionary using btree (id);

alter table "public"."dictionary" add constraint "dictionary_pkey" primary key using index "dictionary_pkey";

-- security

alter table "public"."dictionary" enable row level security;
create policy "Dictionary is viewable by everyone." on dictionary
for select using (true);
