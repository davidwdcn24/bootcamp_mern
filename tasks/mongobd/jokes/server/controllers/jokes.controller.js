const Joke = require('../models/jokes.model');

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(response => res.status(200).json({ jokes: response }))
        .catch(err => res.status(404).json({ message: "Something went wrong", error: err }));
}

module.exports.getOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(response => res.status(200).json({ joke: response }))
        .catch(err => res.status(404).json({ message: "Something went wrong", error: err }));
}

module.exports.getJokeRandom = (req, res) => {
    Joke.aggregate([{ $sample: { size: 1 } }])
        .then(response => res.status(200).json({ jokes: response }))
        .catch(err => res.status(404).json({ message: "Something went wrong", error: err }));
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(response => res.status(201).json({ joke: response }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(response => res.status(200).json({ joke: response }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(response => res.status(200).json({ result: response }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};
