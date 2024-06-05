const { default: mongoose, Schema } = require("mongoose");

const feedSchema = new mongoose.Schema({
    name: String,
    email: String,
    msg: String
})

const feedmodel = mongoose.model("feedback", feedSchema)
module.exports = feedmodel