var createError = require('http-errors');
var express = require('express');
var web = require('./routes/homepage.routes');
var ejs = require('ejs');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require('express-session');
const ejs_layout = require('express-ejs-layouts');
const indexApi = require('./routes/api.index.routes');
const { ppid } = require('process');
const mysql = require('mysql')
const MysqlStore = require('express-mysql-session')(session)
const connection = mysql.createConnection({  host:process.env.MYSQL_HOST,
user: process.env.USER,
port:3306,
password: process.env.PASSWORD,
database: 'devjobs'})
const sessionStore = new MysqlStore({schema: {
    tableName: 'sessions',
    columnNames: {
        session_id: 'session_id',
        expires: 'expires',
        data: 'data'
    }}}, connection)
var app = express();
app.use(logger('dev'));
app.use(session({secret:'umasenhasegura', expires: '60s', resave:false, saveUninitialized:true, store: sessionStore}))
app.use(express.static('public'))
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
