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
mobileNo:{
    type: String,
    required:true,
    unique:true
},
city:{
    type: String,

},
Address:{
    type: String,
   
},
group:{
    type: String,
    
},
img_name:{
    type:String
},
img_path:{
    type:String
},
img_type:{
    type:String
}

},
{
timestamps: true
}
);

module.exports = mongoose.model("teacher", UserSchema);
