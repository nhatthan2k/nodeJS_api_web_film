const express = require('express')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')

const db = require('./config/db')
const route = require('../src/route')

app.use(bodyParser.json({limit: "50mb"}))
app.use(cors())
app.use(morgan('common'))

// connect
db.connect()

// route
route(app)

app.listen(8000, () => {
    console.log('server is runing ...');
})