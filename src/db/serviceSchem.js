const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
     id : {
          type : String,
          required : true
     },
     name : {
          type : String,
          required : true
     },
     connectNo : {
          type : Number,
          required : true
     },
     email : {
          type : String,
          required : true
     },
     address : {
          type : String,
          required : true
     },
     workType : {
          type : String,
          required: true
     },
     plasticType : {
          type : String,
          required: true
     },
     plasticWeight : {
          type : Number,
          required: true
     },
     subjectName : {
          type : String,
          required : true
     }, 
     plasticDetail : {
          type : String,
          required : true
     },
     status : {
          type : String
     }
});

// add to database's
const ServiceData = new  mongoose.model("ServiceDetail", serviceSchema);

module.exports = ServiceData;