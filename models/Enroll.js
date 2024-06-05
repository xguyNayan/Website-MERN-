const { Schema, model } = require("mongoose");

const enrollSchema = new Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    Pno: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const enrollModel = model("enroll", enrollSchema);

module.exports = enrollModel;
