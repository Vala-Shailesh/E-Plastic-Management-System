const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
     userId : {
          type : String,
          required : true
     },
     role : {
          type : String,
          required : true
     },
     reqUserName : {
          type : String,
          required : true
     },
     reqType : {
          type : String,
          required : true
     },
     serviceId : {
          type : Number,
          required : true,
          unique : true
     },
     problemTitle : {
          type : String,
          required : true
     },
     problemDetail : {
          type : String,
          required : true
     }
});

// add schema into database
const ContentService = new mongoose.model("ContentService", Schema);

module.exports = ContentService;