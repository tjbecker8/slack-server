const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()
require('./db')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/api/messages', require('./controllers/get_messages'))
app.post('/api/messages', require('./controllers/post_message'))

app.get('/api/channel', require('./controllers/get_channel'))
app.post('/api/channel', require('./controllers/post_channel'))

app.post('/api/signup', require('./controllers/post_user'))



app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
