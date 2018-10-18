const router = require('express').Router()
const employeeCtrl = require('../controllers/employee_controller') 

router
  .route(`/user`)
  .get((req, res) => {
    console.log(`Accessing GET Methods in /user`)
    res.send('0')
  })
  .post((req, res) => {
    const { name } = req.body
    console.log(`Accessing POST Methods in /user`)
    console.log(req.body)
    
    res.send(`Halo ${name}!`)
  })
  .patch((req, res) => {
    console.log(`Accessing PATCH Methods in /user`)
    res.send('0')
  })
  .delete((req, res) => {
    console.log(`Accessing DELETE Methods in /user`)
    res.send(`0`)
  })

router
  .route(`/employee`)
  .get(employeeCtrl.getEmployee)
  .post((req, res) => {
    const { name } = req.body
    console.log(`Accessing POST Methods in /employee`)
    console.log(req.body)
    
    res.send(`Halo ${name}!`)
  })
  .patch((req, res) => {
    console.log(`Accessing PATCH Methods in /employee`)
    res.send('0')
  })
  .delete((req, res) => {
    console.log(`Accessing DELETE Methods in /employee`)
    res.send(`0`)
  })

module.exports = router