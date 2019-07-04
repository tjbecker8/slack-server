const db_user = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {

	// console.log('req.body before', req.body);

	bcrypt.hash(req.body.password, 10, (err, encrypted) => {
		if (err) {
			res.status(300).send('error', err)
		} else {
			req.body.password = encrypted
			db_user.create(req.body).then((data) => {
				res.send(data)
			}).catch((err)=>{
				res.send(err)
			})
		}
	})
}
