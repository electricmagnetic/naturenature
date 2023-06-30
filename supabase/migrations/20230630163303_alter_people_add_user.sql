alter table "public"."people" add column "user" uuid;

create unique index people_user_key on public.people using btree ("user");

alter table "public"."people" add constraint "people_user_fkey" foreign key (
    "user"
) references auth.users (id) on delete set null not valid;

alter table "public"."people" validate constraint "people_user_fkey";

alter table "public"."people" add constraint "people_user_key" unique using index "people_user_key";
