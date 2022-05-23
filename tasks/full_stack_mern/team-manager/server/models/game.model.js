const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
	id: {
		type: String,
		required: [true, "The Identifier field is required."]
	},
	name: {
		type: String,
		required: [true, "The Game Name field is required."]
	},
	players: {
		type: [String]
	}
}, { timestamps: true });

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;