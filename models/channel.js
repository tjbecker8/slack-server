const db = require('../db')


const db_channel = db.model('channel', {
	channelName: String
})

module.exports = db_channel
