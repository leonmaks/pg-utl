SELECT
  n.nspname,
  c.relname,
  CASE
    c.relkind
    WHEN 'r' THEN 'table'
    WHEN 'v' THEN 'view'
    WHEN 'm' THEN 'materialized view'
    WHEN 'i' THEN 'index'
    WHEN 'S' THEN 'sequence'
    WHEN 's' THEN 'special'
    WHEN 'f' THEN 'foreign table'
  END,
  u.usename
FROM
  pg_catalog.pg_user u,
  pg_catalog.pg_namespace n,
  pg_catalog.pg_class c
WHERE
  n.oid = c.relnamespace
  AND u.usesysid = c.relowner
  AND n.nspname <> 'pg_catalog'
  AND n.nspname <> 'information_schema'
  AND n.nspname !~ '^pg_toast'
  AND pg_catalog.pg_table_is_visible(c.oid)
  ${where^}
