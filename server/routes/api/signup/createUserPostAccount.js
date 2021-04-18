// * to create a post account for a new user
const Post = require("../../../model/post");

const createUserPostAccount = (req, res, next) => {
    const newPostAccount = new Post({
        _id: req.user._id,
        author: req.user.name,
        posts: []
    }); 

    newPostAccount.save()
    .then(() => {
        if (newPostAccount.isNew === false) res.status(200);
        else res.status(500).send("Failed to add post account! Please try again...");
    })
    .catch(err => res.status(500).send(err));
    
    next();
}

module.exports = createUserPostAccount;