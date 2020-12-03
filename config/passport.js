const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
    new LocalStrategy({usernameField:"email"}, (email, password,done) =>{
        User.findOne({email:email})
        .then(user => { 
            if (!user) {
                return done(null,false, {message:"Incorrect email"})
            }
            else if (!user.validPassword(password)) {
                return done(null, false, {
                  message: "Incorrect password."
                });
            }
            // else{
            //     bcrypt.compare(password, user.password, (err,isMatch)=>{
            //         if (err) throw err;
            //         if (is.Match){
            //             return done(null,user);
            //         }
            //         else {
            //             return done(null,false, {message:"Wrong password"})
            //         }
            //     })
            // }
            return done(null,user)
        })
    })
);

passport.serializeUser((user,done)=> {
    done(null,user.id);
});

passport.deserializeUser((id,done) =>{
    User.findById(id, (err,user)=>{
        done(err,user);
    });
});

module.exports = passport;
