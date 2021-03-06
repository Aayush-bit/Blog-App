const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    if(accessToken) {
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) return res.status(403).send('token didnt verify')
            req.user = user
            next();
        })
    } else {
        res.status(401).send('No token received!');
    }
}

module.exports = auth