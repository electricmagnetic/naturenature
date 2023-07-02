alter table "public"."events" add column "source" text;

alter table "public"."events" add constraint "events_source_fkey" foreign key (
    source
) references dictionary (id) not valid;

alter table "public"."events" validate constraint "events_source_fkey";
