const db = require('../db')


const db_message = db.model('message', {
	author: String,
	date: Date,
	body: String
})

module.exports = db_message
