const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PhotoSchema = new Schema(
{
    photoid: {
        type: Number,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    photoType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    locationId:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Photo = mongoose.model('photo', PhotoSchema);
