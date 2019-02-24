"use strict"

const { sjoin } = require("tittles")

const { select } = require("@sql")


const __params = (params) => ({
  ...params,
  columns: sjoin(params.columns, ", ", "", "", "*"),
  from_items: sjoin(params.from_items),
  where: sjoin(params.where, " AND ", " WHERE "),
  group_by: sjoin(params.group_by, ", ", " GROUP BY "),
  having: sjoin(params.having, " AND ", " HAVING "),
  order_by: sjoin(params.order_by, ", ", " ORDER BY "),
  limit: params.limit && params.limit > 0 ? `LIMIT ${params.limit}` : "",
})



module.exports = {

  one: async (db, params = {}) => db.one(select, __params(params)),
  any: async (db, params = {}) => db.any(select, __params(params)),
}
