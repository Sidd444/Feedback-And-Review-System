const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
        required: true,
        trim: true
    },
    approved:{
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
