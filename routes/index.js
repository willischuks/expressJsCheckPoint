var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// // Routes
// app.get('/', (req, res) => {
//   res.render('home');
// });

  router.get('/services', (req, res) => {
  res.render('services');
});
  router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
