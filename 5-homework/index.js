var express = require('express')
var app = express()
var moment = require('moment');

app.use(express.static('static'))

app.set('view engine', 'ejs')

app.use((req, res, next, err) => {
  res.end('Problem...')
  console.log(err)
})

require('./router/index')(app)

var server = app.listen(3040, function () {
  console.log('On: 3040')
})


/***
** Saving and adding of data
**
const ProjectModel = require('./models/project')
const UserModel = require('./models/user')
//var moment = require('moment');

let tempUser = new UserModel();

tempUser.name = 'John Doe'
tempUser.email = 'john@doe.com'
tempUser.password = 'imNotHashing'

tempUser.save((err) => {
  console.log(err)

  let tempProject = new ProjectModel();

  tempProject.title = 'Temp Project'
  tempProject.desc = 'ez egy hosszabb leírás'
  tempProject.createdAt =  moment()
  tempProject._assignedTo = tempUser

  tempProject.save((err) => {
    console.log(err)
  })
})
*/
