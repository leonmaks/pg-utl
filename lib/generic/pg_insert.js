"use strict"

/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

const { pgp } = require("../../")



module.exports = async (db, tableName, records) => {

  const record_ = records[0]
  const columns_ = []

  for (const c_ in record_) { columns_.push(c_) }

  const insert_ = pgp.helpers.insert(records, columns_, tableName)

  return db.result(insert_, null, r => r.rowCount)
}
