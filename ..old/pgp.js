"use strict"

module.exports = options => require("pg-promise")(options || { promiseLib: require("bluebird") })
