-- add geospatial index to events (for attached places)

CREATE INDEX idx_events_event_place_geography ON public.events USING gist (
    event_place_geography
);
