var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
=======
  // Validate isLogin
>>>>>>> home
  res.render('index', {isLogin: false});
});

router.get('/user', (req, res) => {
  res.render('User', {isLogin: true});
});

<<<<<<< HEAD
router.get('/Admin', (req, res) => {
  res.render('Admin', {isLogin: true});
});

router.get('/profile', (req, res) => {
  res.render('profile', {isLogin: true});
});

router.get('/account', (req, res) => {
 res.render('account', {isLogin: true});
});
=======
router.get('/admin', (req, res) => {
  res.render('admin');
});

router.post('/signin', (req, res) => {
  res.redirect('/');
});

router.post('/signup', (req, res) => {
  res.redirect('/');
});

router.get('/searchfield', (req, res) => {
  res.render('schedule', {isLogin: false});
});

router.get('/payment', (req, res) => {
  let data = {
    fieldName: "Sân A",
    date: "20/4/2019",
    time: "16:00"
  }
  res.render('payment', {isLogin: true, data: data});
  // res.json({isLogin: true, data: data});
});

router.get('/payment/qr', (req, res) => {
  res.render('qr', {isLogin: true});
})
>>>>>>> home

module.exports = router;
