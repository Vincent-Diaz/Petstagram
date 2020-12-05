const router = require("express").Router();
const imgRoutes = require("./img");
const authRoutes = require("./auth");
const userRoutes = require("./user");

router.use("/img", imgRoutes);
router.use(authRoutes);
// router.use(userRoutes)

module.exports = router;