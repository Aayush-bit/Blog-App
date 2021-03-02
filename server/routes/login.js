var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var [genAccessToken, genRefreshToken] = require('./genTokens')

const usersData = require('./api/data/usersData')


// middleware which checks whether user has entered all the credentials
const checkData = (req, res, next) => {
    const data = req.body
    if(data.email !== "" && data.password !== "") {
        next()
    } else {
        res.status(400).send('Invalid! Please enter all the credentials')
    }
}

router.post('/', checkData, async (req, res) => {
    const data = req.body;
    const user = usersData.find((user) => {
        if(data.email === user.email) return user
    });

    if(user == null) return res.status(400).send('No such user exists')

    try {
        if(await bcrypt.compare(data.password, user.password)) {
            const userDataForTokens = {id: user.id ,name: user.name}
            const accessToken = genAccessToken(userDataForTokens)
            const refreshToken = genRefreshToken(userDataForTokens)
            const tokens = [{"accessToken": accessToken, "refreshToken": refreshToken}];
            res.json(tokens);
        } else {
            res.status(400).send('Incorrect password')
        }
    } catch {
        res.status(500).send('server error')
    }    
});

module.exports = router;
