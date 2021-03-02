require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// require Routes
var indexRouter = require('./routes/index');
var users = require('./routes/api/users/users');
var posts = require('./routes/api/posts/posts');
var signUp = require('./routes/signUp');
var login = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/users', users)
app.use('/api/posts', posts)
app.use('/signup', signUp)
app.use('/login', login)

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
