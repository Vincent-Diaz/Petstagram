const router = require("express").Router();
const imgRoutes = require("./img");
//const authRoutes = require("./auth");
router.use("/img", imgRoutes);
//router.use("/api/auth", authRoutes);

module.exports = router;