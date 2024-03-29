const Router = require("express").Router();
const mongoose = require('mongoose');

const User = require("../../model/user");
const Post = require("../../model/post");

const isAuthorAuth = require("./authAuthor");
const authToken = require("./authToken");

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
    const accessToken = req.cookies.accessToken;
    
    // check whether the user is the author 
    if(accessToken && isAuthorAuth(accessToken, userId)) {
        User.findOne({ _id: userId }, { password: 0 })
        .then(user => res.status(200).send(user))
        .catch(err => res.status(500).send(err));
    }

    // the user is not the author
    User.findOne({ _id: userId }, { password: 0, bookmarks: 0, postsLiked: 0 })
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send(err));    
});

// request for the data of a particular user and his/her posts
Router.get('/profile/:userId', (req, res) => {
    const userId = req.params.userId;
    User.aggregate([
        {
            $lookup: {
                from: "posts",
                localField: "_id",
                foreignField: "_id",
                as: "postsData"
            }
        },
        {
            $match: { _id: new mongoose.Types.ObjectId(userId) }
        },
        {
            $project: {password: 0, bookmarks: 0, postsLiked: 0}
        }
    ])
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

// request for data to be sent on my profile page
Router.get('/myprofile/:userId', authToken, (req, res) => {
    // todo - reconsider putting the following code in '/profile/:userId'(GET) endpoint using 'isAuthorAuth'
    const userId = req.params.userId;
    User.aggregate([
        {
            $lookup: {
                from: "posts",
                localField: "_id",
                foreignField: "_id",
                as: "postsData"
            }
        },
        {
            $match: { _id: new mongoose.Types.ObjectId(userId) }
        },
        {
            $project: {password: 0}
        },
    ])
    .then((data) => res.json(data))
    .catch(err => res.send(err));
})
// **************************************


// ************ PUT requests ************
// to update information of a particular user
Router.put('/:id', authToken, (req, res) => {
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

Router.delete('/:id', authToken, deleteUser, deletePostAccount, (req, res) => {
    res.status(200).json([{ userDeleted: true }, { postAccountDeleted: true }]);
});
// *****************************************


module.exports = Router;