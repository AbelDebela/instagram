const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LocationSchema = new Schema(
{
    locationId: {
        type:Number,
        required: true
    },
    addressName: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    zipCode:{
        type: String,
        required: false
    },
    country:{
        type: String,
        required: false
    },
    coordinate:{
        type: String,
        required: false
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Locations = mongoose.model('address', LocationSchema);
