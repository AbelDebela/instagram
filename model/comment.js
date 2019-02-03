const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = new Schema(
{
    commentId: {
        type:Number,
        required: true
    },
    photoId: {
        type: Number,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    locationId:{
        type: Number,
        required: false
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Comment = mongoose.model('comment', CommentSchema);
