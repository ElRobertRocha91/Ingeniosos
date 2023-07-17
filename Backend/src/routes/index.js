const { Router } = require("express");

const teacherRoutes = require("./teacherRoutes");
const facultyRoutes = require("./facultyRoutes");

const router = Router();

router.use("/teacher", teacherRoutes);
router.use("/faculty", facultyRoutes);

module.exports = router;