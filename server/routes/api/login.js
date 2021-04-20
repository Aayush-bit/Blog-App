const Router = require("express").Router();
const User = require("../../model/user");
const bcrypt = require('bcrypt');
const [genAccessToken, genRefreshToken] = require('../genTokens');

// middleware which checks whether user has entered all the credentials
const checkData = (req, res, next) => {
    const data = req.body
    if(data.email !== "" && data.password !== "") {
        next()
    } else {
        res.status(400).send('Invalid! Please enter all the credentials')
    }
}

Router.post('/', checkData, async (req, res) => {
    const userData = req.body;
    
    User.findOne({email: userData.email}, {name: 1, password: 1})
    .then(async match => {
        if (match === null ) res.status(404).send("User doesn't exist") ;
        else {
            if(await bcrypt.compare(userData.password, match.password)) {
                const userDataForTokens = {id: match.id ,name: match.name}
                const accessToken = genAccessToken(userDataForTokens)
                const refreshToken = genRefreshToken(userDataForTokens)

                res.setHeader('Authorization', `Bearer ${accessToken}`);
                res.cookie('refreshToken', refreshToken, { httpOnly: true })

                res.json({ loggedIn: true });
            } else {
                res.status(401).send('Incorrect password')
            }
        };
    })
    .catch(err => console.error(err));
});

module.exports = Router;