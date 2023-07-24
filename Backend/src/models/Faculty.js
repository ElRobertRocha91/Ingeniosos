const { Schema, model } = require("mongoose");

const facultySchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: function(v){
                return /^[a-zA-Z ]{4,255}$/.test(v);
            },
            message: "The name must contain only letter and spaces, with a minimum length of 4 and a maximum of 255 characters"
        }
    },
    description: {
        type: String,
    }
})

module.exports = model("Faculty", facultySchema)