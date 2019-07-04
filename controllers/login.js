const db_user = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {

	//check if email exists in database
	db_user.findOne({email: req.body.email}).then((user)=>{
		if (user) {
			//if email found, encrypt password,
			//match passwords encrypted to the one in the database
			bcrypt.compare(req.body.password, user.password, (err, match) => {
				if (match) {
					
					res.send('you are logged in')
				} else {
					res.send('invalid password')
				}
			})
		} else {
			res.send('sorry, email not found')
		}
	}).catch((err) => {
		res.status(300).send(err)
	})


}
