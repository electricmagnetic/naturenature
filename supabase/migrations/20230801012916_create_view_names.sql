-- create view

create view names with (security_invoker) as select
    id,
    name
from individuals
union all
select
    id,
    name
from objects
union all
select
    id,
    name
from people
union all
select
    id,
    name
from places;
