const Player = require('../models/player.model');
const logger = require("../config/logger.config");

module.exports.getAllPlayers = (request, response) => {
    Player.find()
        .then(players => {
            if(players === null || players.length === 0){
                logger.info("There are no registered players.");
                return response.status(404).json({ message: "There are no registered players." });
            }
            return response.status(200).json(players);
        })
        .catch(err => {
            console.log(err);
            logger.log("error", "Unexpected error has ocurred. %s", err.message, err);
            return response.status(500).json({ message: "Unexpected error has ocurred." });
        });
}

module.exports.getPlayer = (request, response) => {
    Player.findOne({ _id: request.params.id })
        .then(player => {
            // Si no existe el pirata devuelve error.
			if (player === null) {
                logger.info("We're sorry, but we couldn't find the player you're looking for.");
				return response.status(404).json({ message: "We're sorry, but we couldn't find the player you're looking for." });
			}
            return response.status(200).json(player);
        })
        .catch(err => {
            console.log(err);
            logger.log("error", "Unexpected error has ocurred. %s", err.message, err);
            return response.status(500).json({ message: "Unexpected error has ocurred." });
        });
}

module.exports.createPlayer = (request, response) => {
    Player.create(request.body)
        .then(player => response.status(201).json(player))
        .catch(err => {
            console.log(err);
            logger.log("error", "Unexpected error has ocurred. %s", err.message, err);
            return response.status(500).json({ message: "Unexpected error has ocurred." });
        });
};

module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({ _id: request.params.id }, request.body, { runValidators: true, new: true })
        .then(player => response.status(200).json(player))
        .catch(err => {
            console.log(err);
            logger.log("error", "Unexpected error has ocurred. %s", err.message, err);
            return response.status(500).json({ message: "Unexpected error has ocurred." });
        });
};

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deletePlayer => response.status(200).json(deletePlayer))
        .catch(err => {
            console.log(err);
            logger.log("error", "Unexpected error has ocurred. %s", err.message, err);
            return response.status(500).json({ message: "Unexpected error has ocurred." });
        });
};
