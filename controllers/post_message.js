const db_message = require('../models/message')

module.exports = (req, res) => {
	db_message.create({
		author: 'tom',
		body: 'I am hungry',
		date: '3 july 2019'
	}).then((data) => {
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
	// res.send('message created')
}
