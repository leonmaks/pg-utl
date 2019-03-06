"use strict"


module.exports = async (db, table_name, params = {}) => db.result([
  "UPDATE",
  table_name,
  "SET",
  params.set.map(c_ => [c_, "${".concat(c_, "}")].join(" = ")).join(", "),
  params.where ? ["WHERE", params.where.join(" AND ")].join(" ") : "",
].join(" "), params, r => r.rowCount)
