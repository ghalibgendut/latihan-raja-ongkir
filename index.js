const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
require("dotenv").config()

// Routes
const apiRouter = require('./src/routes/apiRajaOngkir')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Definisikan router pada path "/api"
app.use('/api', apiRouter)

const port = process.env.PORT
app.listen(port, ()=> console.log(`Server listening on port: ${port}`))
