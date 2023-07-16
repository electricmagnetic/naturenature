-- create bucket

insert into storage.buckets (id, name) values ('media', 'media');

-- security

create policy "Authenticated users can select media" on storage.objects
for select to authenticated
using (bucket_id = 'media');
