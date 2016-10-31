var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '主页' });
});

/* GET register page. */
router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '注册' });
});
router.post('/reg', function(req, res, next) {
//  res.render('reg', { title: '注册' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});
router.post('/login', function(req, res, next) {
//  res.render('login', { title: '登录' });
});

/* GET post page. */
router.get('/post', function(req, res, next) {
  res.render('post', { title: '发表' });
});
router.post('/post', function(req, res, next) {
//  res.render('post', { title: '发表' });
});

/* GET logout page. */
router.get('/logout', function(req, res, next) {
  res.render('logout', { title: 'Express' });
});

module.exports = router;
