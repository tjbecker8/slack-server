const db_message = require('../models/message')

module.exports = (req, res) => {
	db_message.find({}).populate({
		path: 'channel',
		select: 'channelName'
	}).populate({
		path: 'author',
		select: 'email name'
	}).sort('-date').then((data) => {
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}
