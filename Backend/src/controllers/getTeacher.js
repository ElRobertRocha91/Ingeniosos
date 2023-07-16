const Teacher = require("../models/Teacher");

const getAllTeacher = async () => {
    const allTeacher = await Teacher.find();

    return allTeacher;
}

module.exports = { getAllTeacher };