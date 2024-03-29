const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;