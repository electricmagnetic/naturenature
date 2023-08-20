-- only allow no location; or one location (either 'event place geometry' OR an 'event' entity)

alter table "public"."events" add constraint "either_location" check ((num_nonnulls(event_place_geometry, place_id) <= 1)) not valid;

alter table "public"."events" validate constraint "either_location";
