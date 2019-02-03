const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TagSchema = new Schema(
{
    userid: {
        type:Number,
        required: true
    },
    taggedUserId: {
        type:Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Tag = mongoose.model('tag', TagSchema);
