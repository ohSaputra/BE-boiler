const db = require('../config/db')
const { Employee } = db

const getEmployee = (request, respond) => {
  console.log(`Accessing GET Methods in /employee`)
  
  Employee
    .findAll()
    .then(employees => {
      console.log(employees)

      respond
        .status(200)
        .json(employees)
    })
}

const insertEmployee = (req, res) => {
  const { name } = req.body
  console.log(`Accessing POST Methods in /employee`)
  console.log(req.body)
  
  res.send(`Halo ${name}!`)
}

const updateEmployee = (req, res) => {
  console.log(`Accessing PATCH Methods in /employee`)
  res.send('0')
}

const removeEmployee = (req, res) => {
  console.log(`Accessing DELETE Methods in /employee`)
  res.send(`0`)
}

module.exports = {
  getEmployee,
  insertEmployee,
  updateEmployee,
  removeEmployee,
}