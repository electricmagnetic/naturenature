-- created generated geojson columns for geography fields

alter table "public"."places" add column "as_geojson" json generated always as (
    (st_asgeojson(geography))::json
) stored;

alter table "public"."events" add column "event_place_as_geojson" json generated always as (
    (st_asgeojson(event_place_geography))::json
) stored;
