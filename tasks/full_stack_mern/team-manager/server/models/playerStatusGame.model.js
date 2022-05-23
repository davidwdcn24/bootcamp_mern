const mongoose = require("mongoose");

const PlayerStatusGameSchema = new mongoose.Schema({
	id_player: {
		type: String,
		required: [true, "The Player field is required."]
	},
	id_game: {
		type: String,
		required: [true, "The Game field is required."]
	},
	is_playing: {
		type: Boolean,
		default: false
	},
	is_notPlaying: {
		type: Boolean,
		default: false
	},
	is_undecided: {
		type: Boolean,
		default: true
	}
}, { timestamps: true });

const PlayerStatusGame = mongoose.model("PlayerStatusGame", PlayerStatusGameSchema);

module.exports = PlayerStatusGame;