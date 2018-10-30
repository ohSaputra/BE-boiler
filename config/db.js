const Sequelize = require('sequelize')
const path = require('path')

const {
  DATABASE,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  HOSTNAME,
} = process.env

const db = new Sequelize(
  DATABASE, 
  DATABASE_USERNAME, 
  DATABASE_PASSWORD, 
  {
    host: HOSTNAME,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
  }
);

// test connection
db
  .authenticate()
  .then(console.log('Connection has successfully established.'))
  .error(err => console.log(`Error connecting to database: ${err}`))

const models = {
  Employee: db.import(path.join(__dirname, '../models/employee_model')),
  
  Sequelize,
  DB: db,
}

module.exports = models