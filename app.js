var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var desenvolvedorRoutes = require('./routes/desenvolvedores.routes');
const indexApi = require('./routes/api.index.routes')
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', indexApi)




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('homepages/error');
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log("servidor iniciado na porta "+ process.env.PORT)
})
