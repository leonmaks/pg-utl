"use strict"

const { sjoin } = require("tittles")

const objects = require("./objects")



module.exports = async (db, relnames) => objects(db, {
  where: [
    "u.usename = CURRENT_USER",
    "c.relkind IN ('r', '')",
    sjoin(relnames, "', '", "c.relname in ('", "')"),
  ]
})
