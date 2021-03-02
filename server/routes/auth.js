const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(authHeader) {
        const token = authHeader.split(' ')[1]
        if(token == null){
            return res.status(400).send('No acess')
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            
        })
    } else {
        // next()
        // res.send('authHeader not present')
    }
}

module.exports = auth