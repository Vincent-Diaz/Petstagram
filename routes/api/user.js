const router = require("express").Router();
const usersControllers = require("../../controllers/usersControllers");

router.route("/userlist/:username")
  .get(usersControllers.findUserByUserName);
router.route("/followinglist")
  .post(usersControllers.followPeopleByUserName);

module.exports = router;
