var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();

const usersData = require('./api/users/usersData')

router.post('/', async (req, res) => {
    const data = req.body;
    const user = usersData.find((user) => {
        if(data.email === user.email) return user
    });

    if(user == null) return res.status(400).send('No such user exists')

    try {
        if(await bcrypt.compare(data.password, user.password)) {
            res.json(user)
        } else {
            res.status(400).send('Incorrect password')
        }
    } catch {
        res.status(500).send('server error')
    }    
});

module.exports = router;
