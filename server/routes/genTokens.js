const jwt = require('jsonwebtoken')

const genAccessToken = (userData) => {
    return jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET);
}

const genRefreshToken = (userData) => {
    return jwt.sign(userData, process.env.REFRESH_TOKEN_SECRET)
}

module.exports = [genAccessToken, genRefreshToken]