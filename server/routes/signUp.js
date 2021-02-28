const uuid = require('uuid')
const bcrypt = require('bcrypt')

const express = require('express')
const Router = express.Router();

const usersData = require('./api/users/usersData')

Router.post('/', async (req, res) => {
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
        res.json(usersData);
    } catch {
        res.status(500).send();
    }
})

module.exports = Router;