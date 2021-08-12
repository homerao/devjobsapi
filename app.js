var createError = require('http-errors');
var express = require('express');
var web = require('./routes/homepage.routes');
var ejs = require('ejs');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ejs_layout = require('express-ejs-layouts');
const indexApi = require('./routes/api.index.routes');
const { ppid } = require('process');
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(ejs_layout)
app.set('views', path.join(__dirname,'views'))
app.set('layout', './layout')
app.set('view engine', "ejs");

app.use('',web)
app.use('/api/v1', indexApi)






app.listen(process.env.PORT || 3000, ()=>{
  console.log("servidor iniciado na porta "+ process.env.PORT)
})
