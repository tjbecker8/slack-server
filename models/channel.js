const db = require('../db')


const db_message = db.model('message', {
	name: String
})

module.exports = db_message
