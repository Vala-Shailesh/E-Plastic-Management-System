const mongoose = require('mongoose');

const Schem = new mongoose.Schema({
     id : {
          type : String,
          required : true
     },
     role : {
          type : String,
          required : true
     },
     name : {
          type : String,
          required : true
     },
     gender : {
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
          required : true,
          unique : true
     },
     address : {
          type : String,
          required : true
     },
     workType : {
          type : String
     },
     workDetails : {
          type : String
     },
     workConnectNo : {
          type : String
     },
     workEmail : {
          type : String
     },
     workAddress : {
          type : String
     },
     plasticType : {
          type : String
     },
     plasticWest : {
          type : Number
     }
});

const CustomerDetail = new mongoose.model("CustomerDetail", Schem);

module.exports = CustomerDetail;