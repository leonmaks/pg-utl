"use strict"

const { table_drop } = require("@sql")



module.exports = async (db, params) => db.none(table_drop, params)
