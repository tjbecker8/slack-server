const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/slack', {useNewUrlParser: true}, (err) => {
	if (err) {
		console.log('err', err);
	} else {
		console.log('Connected to MongoDB');
	}
})

module.exports = mongoose
