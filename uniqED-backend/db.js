const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/UniQED",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB connection succeeded.");
    } else {
      console.log(
        "Error in DB Connection:" + JSON.stringify(err, undefined, 2)
      ); //2 is two space character for printing the error message
    }
  }
);
mongoose.set("useFindAndModify", false); //to avoid deprecated warnings
module.exports = mongoose;
//mongodb+srv://admin:admin@kyls.5f43c.mongodb.net/KYLS?retryWrites=true&w=majority
//mongodb://localhost:27017/Kyls