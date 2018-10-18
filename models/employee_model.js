const db = require('../config/db')

/**
 * example of use
 * 
 * file xyz.js
 * import employee.js
 * 
 * employee.get((err, result) => {
 *  ...some logic goes here
 * })
 */

// select
const get = (callback) => {
  const q = `select * from employee`

  db.connect()
  db.query(q, callback)
  db.end()
}

// insert
const insert = () => {}

// update
const update = () => {}

// delete
const remove = () => {}

module.exports = {
  get,
  insert,
  update,
  remove,
};