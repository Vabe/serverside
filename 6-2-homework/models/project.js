const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Project = db.model('Project', {
  title: String,
  desc: String,
  createdAt: String,
  _assignedTo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
})

// Project.pre('save', function (next) {
//   this.assignedToStr = assignedToStr.toString();
//   next();
// });

module.exports = Project;