"use strict"

const { sjoin } = require("tittles")

const { trigger_function_create } = require("@sql")



module.exports = async (db, params) => db.none(trigger_function_create, {
  ...params,
  replace: params.replace ? "OR REPLACE" : "",
  args: sjoin(params.args),
})
