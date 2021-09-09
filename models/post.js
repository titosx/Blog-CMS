const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    image: String,
    title: String,
    description: String
    },
    { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);