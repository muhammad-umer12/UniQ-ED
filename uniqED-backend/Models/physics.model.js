const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var linkschema= new Schema({
  url:{
    type:String
  }
},{timestamps:true});
var topicsSchema =new Schema({
    topicName:{
        type:String
    },
    Link:[linkschema]
},
{timestamps:true}
);


let UserSchema = new Schema({
  chapterName:{
    type:String
},
topic:[topicsSchema]


},
{
timestamps: true
}
);

module.exports = mongoose.model("Physics", UserSchema);
