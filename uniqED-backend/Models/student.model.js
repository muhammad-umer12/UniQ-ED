const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name:{
    type: String,
    required:true
},
email:{
    type: String,
    unique:true,
    required:true
},
password:{
    type: String,
    required:true,
},
mobileNo:{
    type: String,
    required:true,
    unique:true
},

board:{
    type: String,
   
},
subject:{
    type: String,
    
},

},
{
timestamps: true
}
);

module.exports = mongoose.model("Student", UserSchema);
