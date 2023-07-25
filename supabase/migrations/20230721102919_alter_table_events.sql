-- add columns necessary for citizen science contributions

alter table "public"."events" add column "is_public" boolean not null default false;
alter table "public"."events" add column "status" text;

alter table "public"."events" add constraint "events_status_fkey" foreign key (
    status
) references dictionary (id) on delete restrict not valid;

alter table "public"."events" validate constraint "events_status_fkey";
