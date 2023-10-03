const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create shema
const PostSchema = new Schema({
    title: String,
    description: String,
    imageUrl: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
