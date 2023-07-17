const { Router } = require("express");
const { getFacultyHandler } = require("../handlers/handlerFaculty");

const router = Router();

router.get("/", getFacultyHandler);

module.exports = router;