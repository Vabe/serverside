var express = require('express')
var app = express()
var moment = require('moment');

app.use(express.static('static'))

app.set('view engine', 'ejs')

require('./router/index')(app)

var server = app.listen(3040, function () {
  console.log('On: 3040')
})
