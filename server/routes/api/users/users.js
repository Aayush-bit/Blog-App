const express = require('express')
const Router = express.Router()

const usersData = require('./usersData')

Router.get('/', (req, res) => {
    res.json(usersData)
})

module.exports = Router