const express = require('express')
const bodyParser = require(`body-parser`)

const app = express()

//middleware 
app.use(bodyParser.urlencoded({extended: false}))
app.use('/assets', express.static('assets'))

// routing
app.get(`/`, (request, respond) => {
  respond.send({ "nama": "andi" })
})

app.get(`/beranda`, 
  (req, res) => { 
    console.log(req.query)
    res.send(`Ini adalah Beranda`)
  })

app.get(`/profil`, 
  (req, res) => res.send(`Ini adalah Profil`))

app.get(`/profil/:username/:id`, (req, res) => {
  res.send(`
    Anda mengakses profil ${ req.params.username }
      \n dengan ID ${ req.params.id }
  `)
})

app.get(`/berita`, 
  (req, res) => res.send(`Ini adalah Berita`))

app.get(`/galeri`, 
  (req, res) => res.send(`Ini adalah Galeri`))

app.get(`/websiteunyu`, (req, res) => {
  res.sendFile(__dirname + `/satu.html`)
})

app.listen(3000)