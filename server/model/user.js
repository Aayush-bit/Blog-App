const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}, 
    followers: {type: Array, default: []}, 
    following: {type: Array, default: []}, 
    profileImg: {type: String, default: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"}, 
    bio: {type: String, default: ""}, 
    postsLiked: {type: Array, default: []},
    bookmarks: {type: Array, default: []} 
});

const User = mongoose.model("user", userSchema);

module.exports = User;