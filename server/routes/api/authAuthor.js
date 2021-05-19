const jwt = require('jsonwebtoken');

// to check whether the request sent is sent from the author or not
const isAuthorAuth = (accessToken, userId) => {
    let isAuthor = false;
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(user.id === userId) {
            // user is the author
            isAuthor = true;
        }
    });
    return isAuthor;
}

module.exports = isAuthorAuth;