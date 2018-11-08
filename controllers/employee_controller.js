const db = require('../config/db')
const { Employee } = db

// error handler

const errorHandler = (err, res) => {
  const errors = {
    message: `Oops, there is error with your request!`,
    error: err,
  }

  res
    .status(500)
    .json(errors)
}

// controller

const getEmployee = (request, respond) => {
  console.log(`Accessing GET Methods in /employee`)
  
  Employee
    .findAll()
    .then(employees => {

      respond
        .status(200)
        .json(employees)
    })
    .catch(err => errorHandler(err, respond))
}

const getEmployeeByID = (req, res) => {
  const { id } = req.params
  console.log(`Accessing GET Methods in /employee/${id}`)

  Employee
    .findByPrimary(id)
    .then(employee => {

      res
        .status(200)
        .json(employee)
    })
    .catch(err => errorHandler(err, res))    
}

const insertEmployee = (req, res) => {
  const { 
    name, 
    address, 
    gender 
  } = req.body
  console.log(`INSERT one employee through /employee`)
  
  Employee
    .create({ address, gender  })
    .then(created => {
      res
        .status(200)
        .json(created)
    })
    .catch(err => errorHandler(err, res))
}

const updateEmployee = (req, res) => {
  const { id } = req.params
  const {
    name,
    gender,
    address
  } = req.body
  console.log(`UPDATE one employee through /employee`)

  let data = {}
  if (name)
    data.name = name

  if (gender)
    data.gender = gender

  if (address)
    data.address = address

  if ( Object.keys(data).length > 0 ) {
    Employee
      .findById(id)
      .then(employee => {
    
        if (employee) {
          Employee
            .update(req.body, { where: { id } })
            .then(updated => {
              res
                .status(200)
                .json({ message: 'successfully updated' })
            })
        }
      })
      .catch(err => errorHandler(err, res))
  } else 
    res.status(404).send({ message: `No field match with your params.`})   

}

const removeEmployee = (req, res) => {
  const { id } = req.params
  console.log(`Deleting one employee through /employee`)
  
  Employee
    .destroy({ where: { id }})
    .then(deleted => {
      res
        .status(200)
        .json({ message: 'Successfuly deleted!' })
    })
}

module.exports = {
  getEmployee,
  getEmployeeByID,
  insertEmployee,
  updateEmployee,
  removeEmployee,
}