const mongoose = require('mongoose')

const specSchema = new mongoose.Schema(
	{
		motherboard: {
			type: String,
			required: true
		},
		gpu: {
			type: String,
			required: true
		},
		ram: {
			type: String,
			required: true
		},
		powersupply: {
			type: String,
			required: true
		},
		cpu: {
			type: String,
			required: true
		},
		storage: {
			type: String,
			required: true
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
