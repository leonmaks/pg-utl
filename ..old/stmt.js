"use strict"


// Helper for linking to external query files;
const stmt = (full_path, options = { minify: true }) => {

  const func__ = "pg-utl/stmt"

  console.log("this=", this)

  const qf_ = new this.pgp.QueryFile(full_path, options)

  if (qf_.error) {

    // Something is wrong with our query file :(
    // Testing all files through queries can be cumbersome,
    // so we also report it here, while loading the module:

    console.error(`${func__}:`, qf_.error)
  }

  return qf_

  // See QueryFile API:
  // http://vitaly-t.github.io/pg-promise/QueryFile.html

}



module.exports = pgp => ({
  pgp,
  stmt,
})
