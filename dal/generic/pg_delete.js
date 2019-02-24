"use strict"

const { sjoin } = require("tittles")



module.exports = async (db, table_name, params = {}) => db.result([
  "DELETE FROM", table_name, sjoin(params.where, " AND ", "WHERE "),
].join(" "), params, r => r.rowCount)
