const mongoose = require('mongoose');

const AuthorScheme = new mongoose.Schema({
    authorName: {
        type:  String,
        required: [true, 'Authors name is mandatory']
    }
});

const Author = mongoose.model('User', AuthorScheme);

module.exports = Author;