"use strict"

const { sjoin } = require("tittles")

const { objects } = require("../../sql")



module.exports = async (db, params) => db.any(objects, {
  ...params,
  where: sjoin(params.where, " AND ", "AND "),
})
