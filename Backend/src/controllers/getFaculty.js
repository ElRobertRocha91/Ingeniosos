const Faculty = require("../models/Faculty");

const getAllFaculty = async () => {
    const allFaculty = await Faculty.find();

    return allFaculty;
}

module.exports = { getAllFaculty };