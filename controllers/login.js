const db_user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {

	//check if email exists in database
	db_user.findOne({email: req.body.email}).then((user)=>{
		if (user) {
			//create a token out of interval
			//if email found, encrypt password,
			//match passwords encrypted to the one in the database
			bcrypt.compare(req.body.password, user.password, (err, match) => {
				if (match) {
					let token =jwt.sign(user.toObject(), 'abc') //thats your token
					res.json({
						message: 'you are logged in',
						token: token
					})
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
