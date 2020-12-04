const passport = require("passport");
const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
    new LocalStrategy({usernameField:"email"}, (email, password,done) =>{
        User.findOne({email:email})
        .then(user => { 
            console.log("user", user)
            if (!user) {
                return done(null,false, {message:"Incorrect email"})
            }
            else if (!user.comparePassword(password)) {
                console.log("incorrect pass")
                return done(null, false, {
                  message: "Incorrect password."
                });
            }
            console.log("hey")
            return done(null,user)
        })
    })
);

passport.serializeUser(function (user, cb) {
    cb(null, user);
});
  passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

module.exports = passport;
