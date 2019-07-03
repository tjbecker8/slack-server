const express = require('express')

const app = express()

require('dotenv').config()

require('./db')


app.get('/api/messages', require('./controllers/get_messages'))
app.post('/api/messages', require('./controllers/post_message'))
app.post('/api/channel', require('./controllers/post_channel'))




app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
