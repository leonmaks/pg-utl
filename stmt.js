"use strict"

const { pgp } = require("@root/pgp")


// Helper for linking to external query files;
module.exports = (full_path, options = {}) => {

  const func__ = "pg-utl/stmt"

  // Generating full path
  // const fp_ = path.join(__dirname, file)

  // const options = {

  //   // TODO:
  //   // minifying the SQL is always advised;
  //   // see also option 'compress' in the API;
  //   minify: true,

  //   // Showing how to use static pre-formatting parameters -
  //   // we have variable 'schema' in each SQL (as an example);
  //   // TODO:
  //   // params: {
  //   //   // replace ${schema~} with "public"
  //   //   schema: "public"
  //   // }


  // }

  const qf_ = new pgp.QueryFile(full_path, options)

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
