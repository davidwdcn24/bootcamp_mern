const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "The Position Name field is required."]
	}
}, { timestamps: true });

const Position = mongoose.model("Position", PositionSchema);

module.exports = Position;