const express = require('express')

const app = express()

require('dotenv').config()

// app.use(express.static(path.join(__dirname, 'client')))





app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
