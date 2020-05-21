const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('static'));

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

//app.set("trust proxy", 1);

require('./router/index')(app);

app.use((err, req, res, next) => {
  res.end('Problem...');
  console.log(err);
});

app.listen(3040, function () {
  console.log('On: 3040');
});
