alter table "public"."people" add column "user_id" uuid;

create unique index people_user_key on public.people using btree (user_id);

alter table "public"."people" add constraint "people_user_id_fkey" foreign key (
    user_id
) references auth.users (id) on delete set null not valid;

alter table "public"."people" validate constraint "people_user_id_fkey";

alter table "public"."people" add constraint "people_user_key" unique using index "people_user_key";
