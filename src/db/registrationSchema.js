const mongoose = require("mongoose");

// import jsonwebtoken for create a token
const jwt = require('jsonwebtoken');

const Schema = new mongoose.Schema({
     role : {
          type : String,
          required : true
     },
     name : {
          type : String,
          required : true
     },
     email : {
          type : String,
          required : true,
          unique : true
     },
     connectNo : {
          type : String,
          required : true
          // unique : true
     },
     password : {
          type : String,
          required : true
     },
     tokens : [{
          token : {
               type : String,
               required : true
          }
     }]
});

// create a token and add into userDeta
Schema.methods.generateToken = async function() {
     try {
          const token = await jwt.sign( { _id : this._id }, "abcdefghijklmnopqurstuvwxyzabcdefghijklmnopqurstuvwxyz" );
          console.log(token);

          // add token into schema
          this.tokens = this.tokens.concat({token : token});
          await this.save();

          return token;
     } 
     catch (err) {
          console.log(`Server are stopped due to this erroe -> ${err}`);
     }
}

const Registration = new mongoose.model("Registration", Schema);

module.exports = Registration;