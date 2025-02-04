const mongoose = require("mongoose");
const { model } = require("mongoose");
const bcrypt = require("bcryptjs");
const { UserSchema } = require("../schema/UserSchema");

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

// Create and export the User model
const UserModel = mongoose.model("user", UserSchema); 
module.exports = { UserModel }; 