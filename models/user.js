const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThirdPartyProviderSchema = new Schema({
  provider_name: {
    type: String,
    default:null
  }, 
  provider_id:{
    type:String,
    default:null
  },
  provider_data:{
    type:{},
    default:null
  }
});

const UserSchema = new Schema(
  {
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
    referral_code:{
      type:String,
      default: function(){
        let hash=0;
        for (let i=0; i< this.email.length; i++){
          hash = this.email.charCodeAt(i) + ((hash<<5)-hash);        
        }
        let res = (hash & 0x00ffffff).toString(16).toUpperCase();
        return "00000".substring(0, 6 - res.length) + res;
      }
    },
    referred_by:{
      type:String,
      default:null
    },
    third_party_auth: [ThirdPartyProviderSchema],
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
  },
  {strict:false}
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
