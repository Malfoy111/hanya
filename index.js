
var express = require('express')
var app = express()

var config = require('./hanya.config.js')
var fs = require('fs')
var {minify, configs} = require('./src/terser')


app.use(express.static('dist'))
async function generate(){
  var entry = fs.readFileSync(config.entry, 'utf8')
  var output = config.output.path+'/'+config.output.hanya
  var result = await minify(entry, configs)
  fs.writeFileSync(output, result.code)
}
generate()
app.get('/', async(req, res) =>{
   console.log(config.entry)
   
   console.log(JSON.stringify(config))
   res.send('hello dunia')

})

app.listen(8081)

