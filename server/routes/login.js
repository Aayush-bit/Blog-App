var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var genAccessToken = require('./genAccessToken')

const usersData = require('./api/users/usersData')

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
            const accessToken = genAccessToken(user.name);
            res.json(accessToken)
        } else {
            res.status(400).send('Incorrect password')
        }
    } catch {
        res.status(500).send('server error')
    }    
});

module.exports = router;
