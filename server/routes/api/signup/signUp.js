const Router = require("express").Router();

const userExistingCheck = require("./userExistingCheck");
const createUserPostAccount = require("./createUserPostAccount");
const createUserAccount = require("./createUserAccount");
const [genAccessToken, genRefreshToken] = require('../../genTokens')

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

// '/signup/' end point
Router.post('/', checkData, userExistingCheck, createUserAccount, createUserPostAccount, (req, res) => {
    // generating access token
    const userDataForTokens = {id: req.user._id, name: req.user.name}
    const accessToken = genAccessToken(userDataForTokens)
    const refreshToken = genRefreshToken(userDataForTokens)
    
    // sending access token and refresh token as cookies
    res.cookie('accessToken', accessToken, { httpOnly: true })
    res.cookie('refreshToken', refreshToken, { httpOnly: true })

    res.json({ loggedIn: true })
});

module.exports = Router;