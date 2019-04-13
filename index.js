"use strict"

let pgp


module.exports = {

  init: params => {

    let params_ = params

    if (!params_) {
      params_ = { promiseLib: require("bluebird") }

      if (process.env.DEBUG) {
        const monitor = require("pg-monitor")
        monitor.setTheme("monochrome")
        monitor.attach(params_)
      }
    }

    module.exports.pgp = pgp = require("pg-promise")(params_)
    return module.exports
  },

  pgp,

  // Helper for linking to external query files;
  stmt: (full_path, options = { minify: true }) => {
    const qf_ = new pgp.QueryFile(full_path, options)
    if (qf_.error) {
      // Something is wrong with our query file :(
      // Testing all files through queries can be cumbersome,
      // so we also report it here, while loading the module:
      // TODO: +tittles.error ?
      console.error(`${__filename}:`, qf_.error)
    }
    return qf_
    // See QueryFile API:
    // http://vitaly-t.github.io/pg-promise/QueryFile.html
  },

  // Generic
  pg_select: require("./lib/generic/pg_select"),
  pg_insert: require("./lib/generic/pg_insert"),
  pg_update: require("./lib/generic/pg_update"),
  pg_delete: require("./lib/generic/pg_delete"),
  pg_insert_ver: require("./lib/generic/pg_insert_ver"),

  // TODO: ...
  columns: require("./lib/catalog/columns"),
}
