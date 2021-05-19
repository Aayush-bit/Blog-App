const Router = require("express").Router();
const Post = require("../../model/post");
const User = require("../../model/user");
const authToken = require("../api/authToken");

// get posts data of a particular user filtered by id
Router.get('/:id', (req, res) => {
    const userId = req.params.id;

    Post.findOne({_id: userId})
    .then(userPosts => res.status(200).json(userPosts))
    .catch(err => res.status(500).send(err));
});

// get posts of all the users
Router.get('/', (req, res) => {
    Post.find({})
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(500).send(err));
});

// get particular post of a particular user filtered by userId and postId
Router.get('/:userId/:postId', (req, res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;

    Post.findOne({ _id: userId })
    .then(userPosts => {
        let requiredPost = undefined;

        userPosts.posts.forEach(post => {
            // whether the provided post id exists in the array
            if(post._id.toString() === postId) {
                // when post is found
                requiredPost = {
                    "author": userPosts.author, 
                    "postData": post
                }
            }
        });
        
        // whether post was found or not?
        if (requiredPost === undefined) {
            // no post was found
            res.status(404).send('Post Not Found!');    
        }
        
        // respond required post
        res.status(200).json(requiredPost);
    })
    .catch(err => res.status(500).send(err))
})

// ************ POST requests ************
// add a new post
// the following is the json request format in the body
// {
//     "author": "name",
//     "post": {
//         "image": {"img": "image", "placeholder": "imagePlaceholder"},
//         "title": "Post Title",
//         "content": "content"
//     },
//     "postedOn": null
// }
Router.post('/:id', authToken, (req, res) => {
    const userId = req.params.id;
    const newPostData = req.body.post;

    const newPost = {  
        posts: [{
            post: {
                image: {img: newPostData.image.img, placeholder: newPostData.image.placeholder},
                title: newPostData.title,
                content: newPostData.content
            },
            postedOn: req.body.postedOn, 
        }]  
    };
    
    Post.updateOne({_id: userId}, {$push: newPost})
    .then(() => res.status(200).json({posted: true}))
    .catch(err => res.status(500).send(err));
});

// to bookmark or unbookmark a post 
// bookmark when query 'mark' is true
// unbookmark when query 'mark' is false
Router.post('/bookmark/:userId/:postId', authToken, (req, res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;
    const mark = (req.query.mark === 'true') ? true : false;

    if (mark) {
        // bookmark the post
        User.updateOne({_id: userId}, {$push: {bookmarks: postId}})
        .then(() => res.json({isBookmarked: true}))
        .catch(err => res.status(500).send(err));
    }

    if (!mark) {
        // unbookmark the post
        User.updateOne({_id: userId}, {$pull: {bookmarks: postId}})
        .then(() => res.json({isBookmarked: false}))
        .catch(err => res.status(500).send(err));
    }
})
// **************************************


// ************ PUT requests ************
// edit data of a post
Router.put('/edit/:userId/:postId', authToken, (req, res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;
    
    Post.findOne({ _id: userId })
    .then(userPosts => {
        let targetPost;
        let editedPosts;

        userPosts.posts.forEach((requiredPost, index) => {
            if(requiredPost._id.toString() === postId) {
                targetPost = userPosts.posts[index].post;

                const editPostData = req.body.post;
                
                userPosts.posts[index].post.image.img = editPostData.image.img;
                userPosts.posts[index].post.image.placeholder = editPostData.image.placeholder;
                userPosts.posts[index].post.title = editPostData.title;
                userPosts.posts[index].post.content = editPostData.content;
                userPosts.posts[index].editedOn = req.body.editedOn;

                editedPosts = userPosts.posts;
                return;
            }
        });
        if (targetPost === undefined) res.status(404).send("Post Not Found!!");

        return editedPosts;
    })
    .then((editedPosts) => {
        Post.updateOne({ _id: userId }, { $set: { posts: editedPosts } })
        .then(() => res.status(200).json({posted: true}))
        .catch(err => res.status(500).send(err));
    
        res.status(200).send({ "dataEdited": true });
    })
    .catch(err => res.status(500).send(err));
});
// **************************************

// ************ DELETE requests ************
// todo - delete a post
Router.delete('/:userId/:postId', (req, res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;

    res.json({userId, postId});
})
// **************************************

module.exports = Router;