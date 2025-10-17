const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    number: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData:{type:Object,default:{}} // Add cart items array
}, { timestamps: true });

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;



