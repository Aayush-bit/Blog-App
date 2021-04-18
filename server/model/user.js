const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}, 
    followers: {type: Array, default: []}, 
    following: {type: Array, default: []}, 
    profileImg: {type: String, default: ""}, 
    bio: {type: String, default: ""}, 
    postsLiked: {type: Array, default: []},
    bookmarks: {type: Array, default: []} 
});

const User = mongoose.model("user", userSchema);

module.exports = User;