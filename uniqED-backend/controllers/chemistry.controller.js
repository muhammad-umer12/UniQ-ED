const English = require("../Models/chemistry.model");
var ObjectId = require("mongoose").Types.ObjectId; //for handling object id
const http = require("https");




const path= require('path')

exports.addEnglishChapter=function(req,res){
    

  
    English.create(req.body)
    .then((data)=>{

        
        console.log(data)
        res.send(data)
    }
    ,(err)=>{
        res.send(err)
    })
}


exports.getAllChapters=function(req,res)
{
  console.log("req agai")
  English.find()
  .then((data)=>{
    //console.log(data)
    console.log(data)
    res.send(data);
  },
  (err)=>{
      res.status=409;
    console.log(err)
    res.send(err);
  })
}