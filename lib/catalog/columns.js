"use strict"

const { sjoin } = require("tittles")

const { columns } = require("@sql")



module.exports = async (db, relnames) => db.any(columns, {
  relnames: sjoin(relnames, "', '", "'", "'"),
})
