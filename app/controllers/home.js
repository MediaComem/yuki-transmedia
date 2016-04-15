var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      pagename: 'home',
      title: 'Yuki Transmedia',
      articles: articles
    });
  });
});

/**
 * Introduction route.
 */
router.get('/introduction', function (req, res, next) {
    res.render('introduction', {
      pagename: 'introduction',
      title: 'introduction page'
    });
});

/**
 * MartialArts route.
 */
router.get('/martialArts', function (req, res, next) {
    res.render('martialArts', {
      pagename: 'martialarts',
      title: 'martialArts page'
    });
});

/**
 * Calligraphy route.
 */
router.get('/calligraphy', function (req, res, next) {
    res.render('calligraphy', {
      pagename: 'calligraphy',
      title: 'Calligraphy page'
    });
});

/**
 * Quizz route.
 */
router.get('/quizz', function (req, res, next) {
    res.render('quizz', {
      pagename: 'quizz',
      title: 'quizz page'
    });
});

/**
 * Calligraphy route.
 */
router.get('/food', function (req, res, next) {
    res.render('food', {
      pagename: 'food',
      title: 'food page'
    });
});

/**
 * Calligraphy route.
 */
router.get('/origami', function (req, res, next) {
    res.render('origami', {
      pagename: 'origami',
      title: 'origami page'
    });
});


/**
 * Outro route.
 */
router.get('/outro', function (req, res, next) {
    res.render('outro', {
      pagename: 'outro',
      title: 'outro page'
    });
});
