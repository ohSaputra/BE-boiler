const employee = require('../models/employee_model')

const getEmployee = (request, respond) => {
  console.log(`Accessing GET Methods in /employee`)

  employee.get((err, result) => {
    console.log(result)
    respond.send(result)
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