const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const genAccessToken = (name) => {
    return jwt.sign(name, process.env.TOKEN_SECRET);
}

module.exports = genAccessToken