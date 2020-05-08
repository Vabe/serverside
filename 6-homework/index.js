var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('static'));

app.use((err, req, res, next) => {
  res.end('Problem...');
  console.log(err);
})

app.use(
  session({
    secret: 'secret'
  })
);

app.set("trust proxy", 1);

require('./router/index')(app);

app.listen(3040, function () {
  console.log('On: 3040')
});


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
