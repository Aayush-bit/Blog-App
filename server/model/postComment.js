const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postCommentSchema = new Schema({
    _id: mongoose.ObjectId, 
    comments: [{
        commentId: mongoose.ObjectId,
        comment: {type: String, required: true},
        commentedBy: {type: mongoose.ObjectId, required: true},
        commentedOn: Date,
        commentEditedOn: Date
    }]
});

const postComment = mongoose.model("postComment", postCommentSchema);

module.exports = postComment;