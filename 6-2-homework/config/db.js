const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/chdv2a',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

module.exports = mongoose