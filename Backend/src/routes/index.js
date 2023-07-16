const { Router } = require("express");

const teacherRoutes = require("./teacherRoutes");

const router = Router();

router.use("/teacher", teacherRoutes);

module.exports = router;