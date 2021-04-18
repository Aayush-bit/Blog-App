const express = require('express')
const auth = require('./auth')
const Router = express.Router()

Router.get('/', auth,(req, res) => {
    res.send(`${req.method} ${req.originalUrl}`)
})

module.exports = Router