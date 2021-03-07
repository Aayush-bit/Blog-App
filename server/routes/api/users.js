const express = require('express')
const Router = express.Router()
const auth = require('./auth')

const usersData = require('./data/usersData')

// responds with all the users
Router.get('/', auth, (req, res) => {
    // res.json(req.user)
    res.json(usersData)
})

module.exports = Router