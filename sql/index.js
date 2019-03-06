"use strict"

const path = require("path")

const { stmt } = require("@root")


module.exports = {

  // Generic
  select: stmt(path.join(__dirname, "./generic/select.sql"), { minify: true }),
  insert_select: stmt(path.join(__dirname, "./generic/insert_select.sql"), { minify: true }),

  // Catalog
  objects: stmt(path.join(__dirname, "./catalog/objects.sql"), { minify: true }),
  columns: stmt(path.join(__dirname, "./catalog/columns.sql"), { minify: true }),

  // Table
  table_create: stmt(path.join(__dirname, "./table/create.sql"), { minify: true }),
  table_drop: stmt(path.join(__dirname, "./table/drop.sql"), { minify: true }),

  // Function
  function_drop: stmt(path.join(__dirname, "./function/drop.sql"), { minify: true }),

  // Trigger function
  trigger_function_create: stmt(path.join(__dirname, "./trigger_function/create.sql"), { minify: true }),

  // Trigger
  trigger_create: stmt(path.join(__dirname, "./trigger/create.sql"), { minify: true }),
  trigger_drop: stmt(path.join(__dirname, "./trigger/drop.sql"), { minify: true }),
}
