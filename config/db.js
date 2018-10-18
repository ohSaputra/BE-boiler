const mysql = require('mysql')

const HOST = '0.0.0.0'
const USER = 'root'
const PASSWORD = 'anjay'
const DATABASE = 'employees'

const db = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
})
 
module.exports = db