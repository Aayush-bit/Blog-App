const Router = require("express").Router();
const Post = require("../../model/post");
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
const findPostByIdAndRespond = (res, postsData, postId) => {
    postsData.posts.forEach((post) => {
        if(post._id.toString() === postId) res.status(200).json(post);
    });
    
    res.status(404).send('post not found!');
}

Router.get('/:userId/:postId', (req, res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;

    Post.findOne({ _id: userId })
    .then(userPosts => findPostByIdAndRespond(res, userPosts, postId))
    .catch(err => res.status(500).send(err))
})


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
            postedOn: null, 
        }]  
    };
    
    Post.updateOne({_id: userId}, {$push: newPost})
    .then(() => res.status(200).json({posted: true}))
    .catch(err => res.status(500).send(err));
});


// ************ PUT requests ************
// edit data of a post
Router.put('/edit/:userId/:postId', authToken, (req, res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;
    
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
    
    res.send(`userId: ${userId}\npostId: ${postId}`);
});
// **************************************


module.exports = Router;