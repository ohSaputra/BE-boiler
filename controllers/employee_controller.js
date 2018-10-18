const employee = require('../models/employee_model')

const getEmployee = (request, respond) => {
  console.log(`Accessing GET Methods in /employee`)

  employee.get((err, result) => {
    console.log(result)
    respond.send(result)
  })
}

module.exports = {
  getEmployee,
}