-- create fts (full text search) column and associated index

alter table places add column fts tsvector generated always as (to_tsvector('english', name)) stored;

create index idx_places_fts on places using gin (fts);
