"use strict"

const { helpers } = require("../sql/helpers")



module.exports = async (db, params) => db.none(helpers.insert_select, params)
