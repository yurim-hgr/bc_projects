var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//express 객체 생성
var app = express();

//세션 설정 : 시크릿키 생성
app.set('trust proxy', 1) // trust first proxy
// app.use(객체) -> req.객체 이렇게 모든 코드에서 접근이 가능하다.
app.use(session({
  secret: 'rhkrdkfha',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ㅇ여기에 정의된 url들은 세션없어도 ok
// ~/users/
app.use('/users', usersRouter);

//이지점에 세션 체크가 들어간다.
app.use((req, res, next)=> {
  if( typeof req.session.uid === 'undefined' || req.session.uid == null ){
    res.redirect('/users/login')
    return
  }
 next()
})
//여기서 부터 나오는 모든 url은 세션이 있어야 접근 가능
//블루 프린트 없무별로 URL에 prefix부여하여 업무는 나눈다.
// ~/
app.use('/', indexRouter);

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