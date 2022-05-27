const mongoose = require('mongoose')

const specSchema = new mongoose.Schema(
  {
    motherboard: {
      type: String,
      required: true
    },
    gpu: {
      type: String,
      required: false
    },
    ram: {
      type: String,
      required: false
    },
    powersupply: {
      type: String,
      required: false
    },
    cpu: {
      type: String,
      required: false
    },
    storage: {
      type: String,
      required: false
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = specSchema
