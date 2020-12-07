const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema(
  {
    id: {
      type: String
    },
    userName: {
      id: { type: String },
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'],
      unique: true
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: [({ length }) => length >= 6, "Password should be longer."]
    },

    posts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Post"
        }
      ],
    
    following:[
      {
        type: Schema.Types.ObjectId,
        ref: "Following"
      }
    ],

  },
);

UserSchema.pre('save', function (next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt(10, (saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

UserSchema.methods.comparePassword = function comparePassword(password) {
  return bcrypt.compareSync(password, this.password)
};
const User = mongoose.model("User", UserSchema);

module.exports = User;
