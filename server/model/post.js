const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    _id: {type: mongoose.ObjectId, required: true},
    author: {type: String, required: true},
    posts: [{
        postId: mongoose.ObjectId, 
        post: {
            image: {
                img: {type: String, default: ""}, 
                placeholder: {type: String, default: "Image for the post"}
            },
            title: {type: String, required: true},
            content: {type: String, required: true}
        },
        likes: {type: Number, default: 0}, 
        postedOn: Date, 
        editedOn: {type: Date, default: null}
    }]
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;