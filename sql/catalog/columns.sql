SELECT
  c.relname AS obj_name,
  a.attname AS col_name,
  pg_catalog.format_type(a.atttypid, a.atttypmod) AS col_type,
  a.attnum AS col_num,
  a.attnotnull AS not_null
FROM
  pg_catalog.pg_attribute a,
  pg_catalog.pg_namespace n,
  pg_catalog.pg_class c
WHERE
  c.relname in (${relnames^})
  AND n.oid = c.relnamespace
  AND a.attrelid = c.oid
  AND a.attnum > 0
  AND NOT a.attisdropped
ORDER BY
  c.relname,
  a.attnum
