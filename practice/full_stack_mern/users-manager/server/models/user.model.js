const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	firstName: { type: String },
	lastName: { type: String },
	email: { type: String },
	password: { type: String },
	lastSession: { type: Date },
	lockedAccount: { type: Boolean, default: false },
	confirmedAccount: { type: Boolean, default: false },
	token: { type: String }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;