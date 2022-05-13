const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "El autor es obligatorio."],
		minlength: [3, "Al menos ingrese 3 caracteres."]
	}
}, { timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;