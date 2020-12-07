const db = require("../models")

module.exports = {
    findByUserName: function (req, res) {
        // console.log("server side user",req.params.username)
        db.User
            .findOne({userName:req.params.userName})
            .then(dbModel => {
                res.json(dbModel);
                // console.log("user found", dbModel)
            })
            .catch(err => res.status(422).json(err));
    }
};
