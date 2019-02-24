"use strict"


const __select = (table_name, params) => (
  [
    "SELECT",
    params.columns ? params.columns.join(", ") : "*",
    "FROM",
    table_name,
    params.where ? ["WHERE", params.where.join(" AND ")].join(" ") : "",
    params.order_by ? ["ORDER BY", params.order_by.join(", ")].join(" ") : "",
  ].join(" ")
)


const one = async (db, table_name, params = {}) => db.one(__select(table_name, params), params)

const any = async (db, table_name, params = {}) => db.any(__select(table_name, params), params)



module.exports = {
  one,
  any,
}
