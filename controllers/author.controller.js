const Author = require('../models/author.model');


module.exports.createAuthor = (req, res) => {

    const { authorName } = req.body;
    
    Author.create(
        { authorName }
    )
        .then(author => res.json({ insertedAuthor: author, msg: 'Successful creation' }))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllAuthors = ( _ , res) => {

    Author.find({})

        .then(retrievedAuthors => res.json(retrievedAuthors))
        .catch(err => res.json(err))

}

module.exports.getAuthor = (req, res) => {

    Author.findOne({_id:req.params.id})

        .then(author => res.json(author))
        .catch(err => res.json(err))

}

module.exports.updateAuthor = (req, res) => {

    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})

        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json(err))

}

module.exports.deleteAuthor = (req, res) => {

    Author.deleteOne({ _id: req.params.id })

        .then(deletedAuthor => res.json(deletedAuthor))
        .catch(err => res.json(err))

}

