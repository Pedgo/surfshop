const express = require('express'),
      router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surfshop - Home' });
});

router.get('/home', (req, res, next) => {
  res.redirect('/')
})

module.exports = router;
