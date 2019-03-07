"use strict"

const { sjoin } = require("tittles")

const { trigger_create } = require("../../sql")



module.exports = async (db, params) => db.none(trigger_create, {
  ...params,
  args: sjoin(params.args),
})
