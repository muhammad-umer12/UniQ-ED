const User = require("../Models/admin.model");

var jwt = require('jsonwebtoken');
exports.student_create = function (req, res) {
    console.log("requestaagai")
    console.log("request data"+req.body)
  
    User.findOne({$or: [{email:req.body.email}, {mobileNo: req.body.mobileNo}]})
    .then((result)=>
    {
      var obj;
     console.log('data comes')
      if (result!= null)
      {
        if(result.email == req.body.email)
        {
          console.log("email same");
          obj={
            messege:"email already exist"
          }
        }
        if(result.mobileNo == req.body.mobileNo)
        {
          obj={
            messege:"Mobile number already exist"
          }
        }
        if(result.mobileNo == req.body.mobileNo  && result.email == req.body.email )
        {
          obj={
            messege:"User already exist"
          }
        }
  
        res.statusCode=409;
        res.setHeader('Content-Type', 'application/json');
        res.json(obj);
      }
      
      else{
           try{
    User.create(req.body)
    .then((result)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log("Data uploaded :"+result);
        res.json(result)
    },
    (err)=>{
      console.log(err)
      res.send(err)
    })
  }
  catch (err){
    console.log(error);
    res.send(err);
  } 
      }
      
    })
  
  };


  
exports.Login = function (req, res) {
    const { usern, user_pass } = req.body;
    console.log(req.body);
  
    try {
      User.findOne(
        { email: req.body.email, password: req.body.password },
        (err, user) => {
          if (user === null) {
            res.send(JSON.stringify("User Not found"));
          } else if (
            user.email === req.body.email &&
            user.password === req.body.password
          ) {
            var token = jwt.sign({ session_id: req.body.email }, 'kcotsevilruoywonk');
            //req.session.user=token;
            console.log("token"+token)
            var sendingObj={
              token:token,
              _uid:user._id,
            
            }
            //req.session.user = 'authenticated';
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.json(sendingObj);
          } else {
            res.send("Error" + JSON.stringify(err, undefined, 2));
          }
        }
      );
    } catch (err) {
      res.send(err);
    }
  };
  
  