const Router = require("express").Router();
const Post = require("../../model/post");

// to get posts data of a particular user filtered by id
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

// to add a new post
Router.post('/:id', (req, res) => {
    const userId = req.params.id;
    const newPostData = req.body.post;

    const newPost = {  
        posts: [{
            post: {
                image: {img: newPostData.image.img, placeholder: newPostData.image.placeholder},
                title: newPostData.title,
                content: newPostData.content
            },
            postedOn: null, 
        }]  
    };
    
    Post.updateOne({_id: userId}, {$push: newPost})
    .then(() => res.status(200).json({posted: true}))
    .catch(err => res.status(500).send(err));
});

// edit a post
Router.post('/edit/:userId/:postId', (req, res) => {
    // const editPostData = req.body.post;

    // const editPost = {  
    //     posts: [{
    //         post: {
    //             image: {img: newPostData.post.image.img, placeholder: newPostData.post.image.placeholder},
    //             title: newPostData.post.title,
    //             content: newPostData.post.content
    //         },
    //         postedOn: null, 
    //     }]  
    // };
    
    // Post.updateOne({_id: newPostData.userId}, {$push: newPost})
    // .then(() => res.status(200).json({posted: true}))
    // .catch(err => res.status(500).send(err));

    res.send(`userId: ${req.params.userId}\npostId: ${req.params.postId}`);
});

module.exports = Router;