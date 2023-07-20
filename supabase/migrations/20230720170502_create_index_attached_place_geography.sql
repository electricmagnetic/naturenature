-- add geospatial index to events (for attached places)

CREATE INDEX idx_events_attached_place_geography ON public.events USING gist (
    attached_place_geography
);
