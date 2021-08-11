var createError = require('http-errors');
var express = require('express');
var ejs = require('ejs');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const indexApi = require('./routes/api.index.routes')
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', "ejs");


app.use('/api/v1', indexApi)






app.listen(process.env.PORT || 3000, ()=>{
  console.log("servidor iniciado na porta "+ process.env.PORT)
})
