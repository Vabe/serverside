const Schema = require('mongoose').Schema
const db = require('../config/db')

const Project = db.model('Project', {
  title: String,
  desc: String,
  createdAt: String,
  _assignedTo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = Project