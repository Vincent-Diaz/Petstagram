const router = require("express").Router();
const usersControllers = require("../../controllers/usersControllers");

router.route("/userlist/:username")
  .get(usersControllers.findByUserName);
module.exports = router;
