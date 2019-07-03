const express = require('express')

const app = express()

require('dotenv').config()


app.get('/api/messages', require('./controllers/get_messages.js'))
app.post('/api/messages', require('./controllers/post_message.js'))




app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
