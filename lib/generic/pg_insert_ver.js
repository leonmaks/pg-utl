"use strict"

const { sjoin } = require("tittles")

const pg_select_ver = require("./pg_select_ver")


const one = async (db, params) => {

  const cur_record_ = pg_select_ver.one(db, params)

  const id_cols_values_ = {}

  const id_cols_where_ = params.id_cols.map(c_ => {
    id_cols_values_[c_] = params.record[c_]
    return [c_, "${".concat(c_, "}")].join(" = ")
  })

  const cur_record_cols_ = ["ctid", params.fd_col, params.td_col]

  const stmt_ = [
    "SELECT",
    sjoin(cur_record_cols_, { dflt = "*" }),
    // sjoin(cur_record_cols_, ", ", "", "", "*"),
    "FROM",
    params.table_name,
    "WHERE",
    sjoin(id_cols_where_, { sep = " AND ", tail = " AND" }),
    // sjoin(id_cols_where_, " AND ", null, " AND"),
    `\${cur_date} BETWEEN ${params.fd_col} AND ${params.td_col}`,
  ].join(" ")

  console.log("stmt=", stmt_)

  // console.log("insert_his: table_his_name=", params.table_name, "id_cols=", params.id_cols, "fd_col", params.fd_col, "td_col", params.td_col)

  // 1. select current record from table_his

  // const stmt_ = __prepare({
  //   columns: cur_record_cols_,
  //   table_name: params.table_name,
  // })



  // const cur_record_ = await pg_select_his.one(db, {
  //   ...params,
  //   columns: cur_record_cols_,
  //   from_items: [params.table_name],
  //   where: id_cols_where_,
  //   // `to_timestamp('${dateFormat(params.cur_date, "UTC:yyyy-mm-dd HH:MM:ss")}', 'YYYY-MM-DD hh24:mi:ss')::timestamp BETWEEN ${params.fd_col} AND ${params.td_col}`,
  //   ...id_cols_values_,
  // })

  // console.log("cur_record=", cur_record_)

  // 1.a. if NO current goto step 4

  // 2. check if FD of current record is not equal new record FD

  // 3. new record TD = current record TD

  // 3. update current record set current record TD = new record FD - 1 second

  // 4. insert new record

  const record_ = records[0]
  const columns_ = []

  for (const c_ in record_) { columns_.push(c_) }

  const insert_ = pgp.helpers.insert(records, columns_, table_his_name)

  return db.result(insert_, null, r => r.rowCount)
}



module.exports = {

  one,
}
