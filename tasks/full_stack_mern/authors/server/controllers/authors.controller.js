const Author = require('../models/author.model');

module.exports.getAllAuthors = (request, response) => {
    Author.find()
        .then(authors => response.status(200).json(authors))
        .catch(err => response.status(404).json({ message: "No existen datos.", error: err }));
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then(author => response.status(200).json(author))
        .catch(err => response.status(404).json({ message: "Lo sentimos, pero no pudimos encontrar el autor que estás buscando. ¿Deseas agregar este autor a nuestra base de datos?", error: err }));
}

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(author => response.status(201).json(author))
        .catch(err => response.status(400).json({ message: "Se presentó un error al intentar crear un nuevo autor.", error: err }));
};

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, { runValidators: true, new: true })
        .then(author => response.status(200).json(author))
        .catch(err => response.status(400).json({ message: "Se presentó un error al intentar actualizar la información del autor.", error: err }));
};

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteAuthor => response.status(200).json(deleteAuthor))
        .catch(err => response.status(400).json({ message: "Se presentó un error al intentar eliminar un autor.", error: err }));
};
