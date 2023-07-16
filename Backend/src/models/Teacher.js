const { Schema, model } = require("mongoose");

const teacherSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    surname: {
        type: String,
        require: true,
        unique: true
    },
    faculty: {
        type: Array
    }
})

module.exports = model("Teacher", teacherSchema);