const { getAllTeacher } = require("../controllers/getTeacher");

const getTeacherHandler = async (req, res) => {
    try {
        const allTeacher = await getAllTeacher();
        res.status(200).json(allTeacher);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { getTeacherHandler };