const { Schema, model } = require("mongoose");

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    surname: {
        type: String,
        required: true,
        unique: true
    },
    faculty: {
        type: Array
    }
})

module.exports = model("Teacher", teacherSchema);