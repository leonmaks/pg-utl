"use strict"

const { function_drop } = require("../../sql")



module.exports = async (db, params) => db.none(function_drop, params)
