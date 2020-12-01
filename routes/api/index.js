const router = require("express").Router();
const imgRoutes = require("./img");

router.use("/img", imgRoutes);

module.exports = router;