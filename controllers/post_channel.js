const db_message = require('../models/channel')

module.exports = (req, res) => {
	db_message.create({
		name: 'yay'
	}).then((data) => {
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
	// res.send('message created')
}
