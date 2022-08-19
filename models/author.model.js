const mongoose = require('mongoose');

const AuthorScheme = new mongoose.Schema({
    authorName: {
        type:  String,
        required: [true, 'Authors name is mandatory'],
        minlength: [3, "Authors name must be at least 3 chars"]
    }
});

const Author = mongoose.model('User', AuthorScheme);

module.exports = Author;