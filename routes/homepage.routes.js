var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('web.pages/home', { title: 'DevJobs', logged:false });
});

router.get('/index', function(req, res, next) {
  res.render('web.pages/home', { title: 'DevJobs', logged:false });
});

router.get('/home', function(req, res, next) {
  res.render('web.pages/home', { title: 'DevJobs', logged:false });
});

router.get('/login', function(req, res, next) {
  res.render('web.pages/login', { title: 'DevJobs', logged:false });
});

router.get('/sobre', function(req, res, next) {
  res.render('web.pages/sobre',{ title: 'DevJobs', logged:false });
});

router.get('/vagas', function(req, res, next) {
  res.render('web.pages/index', { title: 'DevJobs', logged:false });
});

router.get('/novo-cadastro', function(req, res, next) {
  res.render('web.pages/cadastro', { title: 'Escolha um tipo de cadastro', logged:false });
});

router.get('/empresas', function(req, res, next) {
  res.render('web.pages/empresas', { title: 'Empresas' });
});

router.get('/cadastro-dev', function(req, res, next) {
  res.render('web.pages/dev-register', { title: 'Cadastrar-se' });
});
router.get('/cadastro-empresa', function(req, res, next) {
  res.render('web.pages/empresa-register', { title: 'Cadastrar-se' });
});

module.exports = router;
