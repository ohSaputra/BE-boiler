require('dotenv').load();
const express = require('express')
const bodyParser = require(`body-parser`)
const cors = require(`cors`)

const route = require(`./routes/route`)
const app = express()

//middleware 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/assets', express.static('assets'))

// routing
app.use(route)

app.listen(process.env.PORT, () => console.log(`Run at Port ${process.env.PORT}!`))