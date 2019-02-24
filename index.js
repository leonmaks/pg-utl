"use strict"

/* eslint-disable global-require */

const malias = require("module-alias")
malias.addAliases({
  "@root": __dirname,
  "@sql": `${__dirname}/sql`,
})

const importLazy = require("import-lazy")(require)

const { init, pgp } = importLazy("./pgp")
const stmt = importLazy("./stmt")



module.exports = {

  init,
  pgp,
  stmt,

  // Generic
  pg_select: importLazy("./dal/generic/pg_select"),
  pg_insert: importLazy("./dal/generic/pg_insert"),
  pg_update: importLazy("./dal/generic/pg_update"),
  pg_delete: importLazy("./dal/generic/pg_delete"),
  pg_insert_ver: importLazy("./dal/generic/pg_insert_ver"),

  // TODO: ...
  columns: importLazy("./dal/catalog/columns"),
}
