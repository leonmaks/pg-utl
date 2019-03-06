"use strict"

const { sjoin } = require("tittles")

const { table_create } = require("@sql")



module.exports = async (db, params) => db.none(table_create, {
  ...params,
  columns: sjoin(params.columns.map(c_ => `${c_.col_name} ${c_.col_type}${c_.not_null ? " NOT NULL" : ""}`)),
})
