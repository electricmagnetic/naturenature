alter table "public"."identifiers" add constraint "identifiers_type_fkey" FOREIGN KEY (type) REFERENCES dictionary(id) not valid;

alter table "public"."identifiers" validate constraint "identifiers_type_fkey";

alter table "public"."places" add constraint "places_type_fkey" FOREIGN KEY (type) REFERENCES dictionary(id) not valid;

alter table "public"."places" validate constraint "places_type_fkey";

alter table "public"."samples" add constraint "samples_type_fkey" FOREIGN KEY (type) REFERENCES dictionary(id) not valid;

alter table "public"."samples" validate constraint "samples_type_fkey";


