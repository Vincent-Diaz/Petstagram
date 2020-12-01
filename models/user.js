const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { 
    type: String, 
    required: true,
    trim:true,
    unique:true
    },
    email: { 
        type: String, 
        required: true,
        match:[/.+@.+\..+/, 'Please enter a valid email address'],
        unique:true
    },
    password: { 
        type: String, 
        required: true,
        trim:true,
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },
    userCreated: { 
        type: Date, 
        default: Date.now 
    },
    posts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Post"
        }
      ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
