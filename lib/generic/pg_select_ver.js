"use strict"

const { sjoin } = require("tittles")

const __params = (params) => ({
  ...params,
  columns: sjoin(params.columns, { dflt = "*" }),
  // columns: sjoin(params.columns, ", ", "", "", "*"),
  from_items: sjoin(params.from_items),
  where: sjoin(params.where, { sep = " AND ", tail = " AND " }),
  // where: sjoin(params.where, " AND ", "", " AND "),
})

module.exports = {

  one: async (db, params = {}) => {

    // Columns to be fetched
    const cur_record_cols_ = params.columns ? Array.from(params.columns) : []
    cur_record_cols_.includes("ctid") || cur_record_cols_.push("ctid")
    cur_record_cols_.includes(params.fd_col) || cur_record_cols_.push(params.fd_col)
    cur_record_cols_.includes(params.td_col) || cur_record_cols_.push(params.td_col)

    const id_cols_values_ = {}

    const id_cols_where_ = params.id_cols.map(c_ => {
      id_cols_values_[c_] = params.record[c_]
      return [c_, "${".concat(c_, "}")].join(" = ")
    })

    const stmt_ = [
      "SELECT",
      sjoin(cur_record_cols_),
      "FROM",
      params.table_name
    ].join(" ")

    console.log("stmt=", stmt_)

    return db.one(stmt_, params)
  },
}
