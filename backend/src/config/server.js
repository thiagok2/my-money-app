const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors') //# config 2
const queryParser = require('express-query-int') //# config 2

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors) //# config 2
server.use(queryParser()) //# config 2

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server