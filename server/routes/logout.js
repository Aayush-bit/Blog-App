const express = require('express');
const Router = express.Router();

// check whether cookies are present or not
const checkCookiePresence = (req, res, next) => {
    if(JSON.stringify(req.cookies) === JSON.stringify({})) res.send(`no cookies present`);

    // otherwise cookies are present
    next();
}

Router.get('/', checkCookiePresence, (req, res) => {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.send(`Logged out from server`);
})

module.exports = Router;