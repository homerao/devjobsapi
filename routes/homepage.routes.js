var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let session = req.session
  let data = session.data
  console.log(data)
  if( typeof data !== "undefined" && data !== null){
    res.render('web.pages/home', data);
  }else {
    res.render('web.pages/home', {title:'home', logged:false});
  }
})

router.get('/index', function(req, res, next) {
  let session = req.session
  let data = session.data
  console.log(data)
  if( typeof data !== "undefined" && data !== null){
    res.render('web.pages/home', data);
  }else {
    res.render('web.pages/home', {title:'home', logged:false});
  }
});

router.get('/home', function(req, res, next) {
  let session = req.session
  let data = session.data
  if( typeof data !== "undefined" && data !== null){
    res.render('web.pages/home', data);
  }else {
    res.render('web.pages/home', {title:'home', logged:false});
  }
 
});

router.get('/login', function(req, res, next) {
  let session = req.session
  let data = session.data
  if( typeof data !== "undefined" && data !== null){
    res.redirect('developer/carregar_menu', data);
  }else {
    res.render('web.pages/login', {title:'login', logged:false});
  }

});

router.get('/sobre', function(req, res, next) {
  let session = req.session
  let data = session.data
  if( typeof data !== "undefined" && data !== null){
    res.render('web.pages/sobre', data);
  }else {
    res.render('web.pages/sobre', {title:'home', logged:false});
  }

});

router.get('/vagas', function(req, res, next) {
  let session = req.session
  let data = session.data
  if( typeof data !== "undefined" && data !== null){
    res.render('web.pages/vagas_convidado', data);
  }else {
    res.render('web.pages/vagas_convidado', {title:'vagas', logged:false});
  }

});

router.get('/novo-cadastro', function(req, res, next) {
  let session = req.session
  let data = session.data
  if( typeof data !== "undefined" && data !== null){
    res.redirect('/api/v1/desenvolvedores/carregar_menu');
  }else {
    res.render('web.pages/cadastro', {title:'home', logged:false});
  }
  
});

router.get('/empresas', function(req, res, next) {
  let session = req.session
  let data = session.data
  if( typeof data !== "undefined" && data !== null){
    res.render('web.pages/empresas', data);
  }
  
});

router.get('/cadastro-dev', function(req, res, next) {
  let session = req.session
  let data = session.data
  if( typeof data !== "undefined" && data !== null){
    res.render('web.pages/dev-register', data);
  }
  
});
router.get('/cadastro-empresa', function(req, res, next) {
  let session = req.session
  let data = session.data
  if( typeof data !== "undefined" && data !== null){
    res.render('web.pages/empresa-register',data);
  }
  
});

router.get('/logout', function(req, res, next) {
  let session = req.session
  session.data = null
  session.destroy()
  
  res.redirect('/home');

  
});

module.exports = router;
