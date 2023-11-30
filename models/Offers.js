const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'],
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    adress: {
        type: String,
        trim: true,
    },
})
const offerSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    jobTitle: {
        type: String,
        trim: true,
        required: true,
    },
    url: {
        type: String,
        trim: true,
        required: true,
    },
    employer: employerSchema,

    offerOrigin: {
        type: String,
        required: true,
    },
    offerStatus: {
        type: String,
        required: true,
    },
    comments:{
        type: String,
        trim: true,
    },

// user_id

});

const Offer = mongoose.model('offer', offerSchema);

module.exports = Offer;