var createError = require('http-errors');
var express = require('express');
const { mongoose } = require("./db");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const english = require("./routes/english.routes");
const student = require("./routes/student.routes");
const chemistry = require("./routes/chemistry.routes");
const biology = require("./routes/biology.routes");
const admin = require("./routes/admin.routes");
const physics = require("./routes/physics.routes");

const cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/english", english);
app.use("/chemistry", chemistry);
app.use("/student", student);
app.use("/biology", biology);
app.use("/admin", admin);
app.use("/physics", physics);
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
