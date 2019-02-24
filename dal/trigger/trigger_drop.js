"use strict"

const { trigger_drop } = require("@sql")



module.exports = async (db, params) => db.none(trigger_drop, params)
