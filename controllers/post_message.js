const db_message = require('../models/message')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	jwt.verify(req.body.token, process.env.SECRET, (err, decoded) => {
		if (decoded) {
			console.log('decoded', decoded);
			req.body.author = decoded._id
			db_message.create(req.body).then((data) => {
				// res.send(data)
				console.log('data', data);
				db_message.findById(data._id).populate('author').then((found_message) => {
					res.send(found_message)
				})
			}).catch((err)=>{
				res.send(err)
			})
		}
	})
}

// 1. After you create the message
// 2. You need to find it again in the database and populate author
// 3. Respond with populated message
