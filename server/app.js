require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// require Routes
var users = require('./routes/api/users');
var posts = require('./routes/api/posts');
var signUp = require('./routes/api/signup/signUp');
var login = require('./routes/api/login');
var logout = require('./routes/logout');
var dbConnectionFunction = require('./dbConnection');

var app = express();

// establishing database connection
dbConnectionFunction();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', users)
app.use('/api/posts', posts)
app.use('/auth/signup', signUp)
app.use('/auth/login', login)
app.use('/logout', logout)

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
