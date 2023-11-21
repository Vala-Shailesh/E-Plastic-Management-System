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
     workerDepartment : {
          type : String,
          required : true
     },
     workerEducation : {
          type : String
     },
     workerExperience : {
          type : Number
     },
     salary : {
          type : Number
     },
     oldJob : {
          type : String
     }
});

const WorkerDetail = new mongoose.model("WorkerDetail", Schem);

module.exports = WorkerDetail;