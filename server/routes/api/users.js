const express = require('express')
const Router = express.Router()
const auth = require('./auth')

const usersData = require('./data/usersData')

Router.get('/', auth, (req, res) => {
    res.send(req.user)
})

module.exports = Router