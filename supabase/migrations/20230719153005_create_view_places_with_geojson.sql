-- add view to get places as geojson (more front-end friendly)

create or replace view "public"."places_with_geojson" as select
    places.id,
    places.created_at,
    places.type,
    places.name,
    places.metadata,
    (st_asgeojson(places.geography))::json as geojson
from places;
