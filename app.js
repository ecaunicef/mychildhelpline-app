var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

//connect to db
require('./model/db');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/userRoute');
var counsellingRoute = require('./routes/counsellingRoute.js');
var areaRoute = require('./routes/areaRoute');
const contextService = require('request-context');
const credentialRoute = require('./routes/credentialRoute.js');
let feedbackRouter = require('./routes/feedbackRoute');
var moodTrackerRouter = require('./routes/moodTrackerRoute.js');


var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));


const customXSSOptions = {
  allowedKeys: ['filter']
};

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const fileUpload = require('express-fileupload');
const sequelize = require('./model/db.js');
const port = process.env.PORT || 3000;







 
// wrap requests in the 'request' namespace (can be any string)
app.use(contextService.middleware('request'));
app.use(fileUpload());





//routing
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/credential', credentialRoute);
app.use('/area', areaRoute);
app.use('/counselling', counsellingRoute)
app.use('/feedback', feedbackRouter);
app.use('/moodtracker', moodTrackerRouter);









const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}`);
  try {
    await sequelize.authenticate(); // Test the database connection
    console.log('Database connection has been established successfully.');
    await sequelize.sync(); // Sync the database models
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});


app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app



