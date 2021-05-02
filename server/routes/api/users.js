const Router = require("express").Router();
const jwt = require('jsonwebtoken');
const User = require("../../model/user");
const Post = require("../../model/post");

// ************ GET requests ************
// to get all the users
Router.get('/', (req, res) => {
    User.find({}, {password: 0, bookmarks: 0, postsLiked: 0})
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).send(err));
});

// to get information of a particular user filtering by _id
Router.get('/:id', (req, res) => {
    const userId = req.params.id;

    // check whether the user is the author 
    const accessToken = req.cookies.accessToken;
    if (accessToken) {
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(user.id === userId) {
                // when the user is the author
                User.findOne({ _id: userId }, { password: 0 })
                .then(user => res.status(200).send(user))
                .catch(err => res.status(500).send(err));            
            }
        })
    }

    // the user is not the author
    User.findOne({ _id: userId }, { password: 0, bookmarks: 0, postsLiked: 0 })
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send(err));
});
// **************************************


// ************ PUT requests ************
// to update information of a particular user
Router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const newInfo = req.body;

    User.findOneAndUpdate({ _id: userId }, { $set: newInfo })
    .then(() => res.status(200).json({ infoUpdated: true }))
    .catch(err => res.status(500).send(err));
});
// **************************************


// ************ DELETE requests ************

const deleteUser = (req, res, next) => {
    User.findOneAndDelete({ _id: req.params.id })
    .then(() => res.status(200))
    .catch(err => res.status(500).send(err));
    next();
};
const deletePostAccount = (req, res, next) => {
    Post.findOneAndDelete({ _id: req.params.id })
    .then(() => res.status(200))
    .catch(err => res.status(500).send(err));
    next();
};

Router.delete('/:id', deleteUser, deletePostAccount, (req, res) => {
    res.status(200).json([{ userDeleted: true }, { postAccountDeleted: true }]);
});
// *****************************************


module.exports = Router;