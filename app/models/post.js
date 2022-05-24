const mongoose = require('mongoose')
const specSchema = require('./spec')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  spec:[specSchema],
  description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
