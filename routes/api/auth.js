// Requiring our models and passport as we've configured it
const db = require('../../models');
const passport = require('../../config/passport');
const router = require('express').Router();

router.post('/login', passport.authenticate('local'), function (req, res) {
  console.log("req", req);
  res.json(req.user);
});

router.post('/signup', function (req, res) {
  console.log("req.body",req.body)
  db.User.create({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  })
    .then(user =>res.json(user))
    .then(function () {
      res.redirect(307, '/api/login');
    })
    .catch(function (err) {
      console.log("err", err)
      res.status(401).json(err);
    });
});

// Route for logging user out
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// Route for getting some data about our user to be used client side
router.get('/user_data', function (req, res) {
  console.log(req.user)
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.status(401).json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
      userName:req.user.userName
    });
  }
});

module.exports = router;