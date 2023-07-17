const { getAllFaculty } = require("../controllers/getFaculty");

const getFacultyHandler = async () => {
    try {
        const allFaculty = await getAllFaculty();
        res.status(200).json(allFaculty);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { getFacultyHandler };