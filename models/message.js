const db = require('../db')


const db_message = db.model('message', {
	author: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	},
	body: {
		type: String,
		required: [true, 'Message body is required']
	}
})

module.exports = db_message
