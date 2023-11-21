const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/E-Plastic-Mangment-System", {
     useNewUrlParser : true,
     useUnifiedTopology : true
}).then( () => {
     console.log("databases connection are establishing....");
}).catch( (err) => {
     console.log( "database connection are failed duty to -> ", err);
});