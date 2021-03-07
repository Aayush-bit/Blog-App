const uuid = require('uuid')
const bcrypt = require('bcrypt')

const express = require('express')
const Router = express.Router();

const usersData = require('./api/data/usersData')
const [genAccessToken, genRefreshToken] = require('./genTokens')

// middleware which checks whether user has entered all the credentials
// if not then sends back an error response (400)
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

    try {
        // encrypt password
        const hashedPassword = await bcrypt.hash(data.password, 10);
        
        // create a new user and push in the array
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
        const userDataForTokens = {id: newUser.id, name: newUser.name}
        const accessToken = genAccessToken(userDataForTokens)
        const refreshToken = genRefreshToken(userDataForTokens)
        // const tokens = {"accessToken": accessToken, "refreshToken": refreshToken};
        
        // sending access token and refresh token as cookies
        res.cookie('accessToken', accessToken, { httpOnly: true })
        res.cookie('refreshToken', refreshToken, { httpOnly: true })

        // sending json response consisting of both the tokens
        // res.json(tokens);
        res.json({ loggedIn: true })
    } catch {
        res.status(500).send('server error');
    }
})

module.exports = Router;