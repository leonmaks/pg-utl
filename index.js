"use strict"

const malias = require("module-alias")
malias.addAliases({
  "@root": __dirname,
  "@sql": `${__dirname}/sql`,
})

const importLazy = require("import-lazy")(require)

let pgp


module.exports = {

  init: options => {
    pgp = require("pg-promise")(options || { promiseLib: require("bluebird") })
    return pgp
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
  pg_select: importLazy("./lib/generic/pg_select"),
  pg_insert: importLazy("./lib/generic/pg_insert"),
  pg_update: importLazy("./lib/generic/pg_update"),
  pg_delete: importLazy("./lib/generic/pg_delete"),
  pg_insert_ver: importLazy("./lib/generic/pg_insert_ver"),

  // TODO: ...
  columns: importLazy("./lib/catalog/columns"),
}
