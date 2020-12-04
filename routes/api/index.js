const router = require("express").Router();
const imgRoutes = require("./img");
const authRoutes = require("./auth");

router.use("/img", imgRoutes);
router.use(authRoutes);

module.exports = router;