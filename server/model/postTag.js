const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postTagSchema = new Schema({
    postId: {type: mongoose.ObjectId, required: true},
    tags: Array
});

const PostTag = mongoose.model("postTag", postTagSchema);

module.exports = PostTag;