
var express = require('express')
var app = express()

app.use(express.static('dist'))

app.get('/', async(req, res) =>{
   
   //res.send('hello dunia')
})

app.listen(8080)

