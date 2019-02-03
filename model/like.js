const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LikeSchema = new Schema(
{
    userId: {
        type:Number,
        required: true
    },
    photoId: {
        type:Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Like = mongoose.model('like', LikeSchema);
