const db = require("../models")

module.exports = {
    findUserByUserName: function (req, res) {
        // console.log("server side user",req.params.username)
        db.User
            .find({userName:new RegExp('^'+req.params.username+'.*$', "i")})
            .then(dbModel => {
                res.json(dbModel);
                // console.log("user found", dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    followPeopleByUserName: function (req, res) {
       db.Following
                .create(req.body)
                .then(dbModel => {
                    res.json(dbModel);
                    console.log("req.body", req.body)
                    console.log("route hit")
                })
                .catch(err => res.status(422).json(err));
    }
};
