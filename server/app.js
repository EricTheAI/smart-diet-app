var DocumentDBClient = require('documentdb').DocumentClient;
var config = require('./config');
var TaskList = require('./routes/tasklist');
var TaskDao = require('./models/taskDao');
var Profile = require('./routes/userprofiles');
var Record = require('./routes/records')
var Food = require('./routes/food')
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var Users = require('./routes/users');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Todo App:
var docDbClient = new DocumentDBClient(config.host, {
    masterKey: config.authKey
});
var taskDao = new TaskDao(docDbClient, config.databaseId, config.collectionId);
var taskList = new TaskList(taskDao);
var users = new Users(taskDao)
var profiles = new Profile(taskDao)
var records = new Record(taskDao)
var food = new Food(taskDao)

taskDao.init();

app.get('/', taskList.showTasks.bind(taskList));
app.post('/addtask', taskList.addTask.bind(taskList));
app.post('/completetask', taskList.completeTask.bind(taskList));
app.post('/login',users.login.bind(users))
app.post('/register',users.register.bind(users))
app.post('/profile',profiles.update.bind(profiles))
app.post('/fooddetect', records.foodDetect.bind(records))
app.post('/food/confirm',food.confirm.bind(food))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
