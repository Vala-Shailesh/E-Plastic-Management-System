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
     industryName : {
          type : String,
          required : true
     },
     industryEmail : {
          type : String,
          required : true
     },
     industryMoblieNo : {
          type : Number
     },
     industryPlasticType : {
          type : String
     },
     industryAccepedPlastic : {
          type : Number
     }
});

const IndustryDetail = new mongoose.model("IndustryDetail", Schem);

module.exports = IndustryDetail;