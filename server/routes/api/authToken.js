const jwt = require('jsonwebtoken');

// middleware to verify the access token from the request
const authToken = (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    // if no access token was sent
    if (accessToken == null) return res.sendStatus(401);

    // if access token was sent
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).send('token didnt verify')
        next();
    })
}

module.exports = authToken