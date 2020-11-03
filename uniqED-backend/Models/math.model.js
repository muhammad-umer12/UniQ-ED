const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var topicsSchema =new Schema({
    topicName:{
        type:String
    },
    Link:[]
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

module.exports = mongoose.model("Math", UserSchema);
