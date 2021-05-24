var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepages/index', { title: 'DevJobs' });
});

router.get('/index', function(req, res, next) {
  res.render('homepages/index', { title: 'DevJobs' });
});

router.get('/home', function(req, res, next) {
  res.render('homepages/index', { title: 'DevJobs' });
});

router.get('/login', function(req, res, next) {
  res.render('homepages/login', { title: 'DevJobs' });
});

router.get('/sobre', function(req, res, next) {
  res.render('homepages/sobre', { title: 'Sobre' });
});

router.get('/vagas', function(req, res, next) {
  res.render('homepages/index', { title: 'Vagas' });
});

router.get('/novo-cadastro', function(req, res, next) {
  res.render('homepages/escolha-cadastro', { title: 'Escolha um tipo de cadastro' });
});

router.get('/empresas', function(req, res, next) {
  res.render('homepages/empresas', { title: 'Empresas' });
});

router.get('/cadastro-dev', function(req, res, next) {
  res.render('homepages/dev-register', { title: 'Cadastrar-se' });
});
router.get('/cadastro-empresa', function(req, res, next) {
  res.render('homepages/empresa-register', { title: 'Cadastrar-se' });
});

module.exports = router;
