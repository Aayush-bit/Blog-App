const uuid = require('uuid')
const bcrypt = require('bcrypt')
const genAccessToken = require('./genAccessToken')

const express = require('express')
const Router = express.Router();

const usersData = require('./api/users/usersData')

const checkData = (req, res, next) => {
    const data = req.body
    if(data.name !== "" && data.email !== "" && data.password !== "") {
        next()
    } else {
        res.status(400).send('Invalid! Please enter all the credentials')
    }
}

Router.post('/', checkData, async (req, res) => {
    const data = req.body;

    // encrypt password
    try {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        // create an new user
        const newUser = {
            id: uuid.v4(),
            name: data.name,
            email: data.email,
            password: hashedPassword,
            followers: [],
            following: [],
        }
        usersData.push(newUser);

        // generating access token
        const accessToken = genAccessToken({name: newUser.name})
        res.json(accessToken);
    } catch {
        res.status(500).send();
    }
})

module.exports = Router;