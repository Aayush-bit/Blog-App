const jwt = require('jsonwebtoken');

// middleware to verify the access token from the request
const auth = (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    if(accessToken) {
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) return res.status(403).send('token didnt verify')
            next();
        })
    } else {
        res.status(401).send('No token received!');
    }
}

module.exports = auth