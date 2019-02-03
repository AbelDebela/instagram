const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FollowerSchema = new Schema(
{
    userid: {
        type:Number,
        required: true
    },
    followerid: {
        type:Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Follower = mongoose.model('follower', FollowerSchema);
