"use strict"

/* eslint-disable global-require */


const init = options => {
  module.exports.pgp = require("pg-promise")(options || {})
  return module.exports
}



module.exports = {
  // every 'init' call will rewrite 'pgp'
  init,
  // placeholder - set after 'init' called
  pgp: undefined,
}
