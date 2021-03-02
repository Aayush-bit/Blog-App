const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(authHeader) {
        const token = authHeader.split(' ')[1]
        if(token == null) return res.status(401).send('No acess')

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) return res.status(403).send('token didnt verify')
            req.user = user
            next();
        })
    } else {
        res.status(400).send('no access');
    }
}

module.exports = auth