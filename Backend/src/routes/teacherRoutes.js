const { Router } = require("express");
const { getTeacherHandler } = require("../handlers/handlerTeacher");

const router = Router();

router.get("/", getTeacherHandler);

module.exports = router;