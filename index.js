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

app.listen(3000, () => console.log(`Run at Port 3000!`))