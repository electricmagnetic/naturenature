-- enable anonymous users to view public events and associated records

create policy "Allow anonymous users to view public events" on "public"."events"
as permissive for select
to anon
using (is_public = true);

create policy "Allow anonymous users to view public records (via events)" on "public"."records"
as permissive for select
to anon
using (exists (
    select
    from events
    where ((events.id = records.event) and (events.is_public = true))
))