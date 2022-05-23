const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "The Player Name field is required."],
		minLength: [2, "At least enter two characters."]
	},
	id_position: {
		type: String
	}
}, { timestamps: true });

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;