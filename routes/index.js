
var express = require('express');
var router = express.Router();
var React = require('react/addons');
var templateLoader = require('../modules/template');

/* GET home page. */
router.get('/', function(req, res, next) {
  var App = React.createFactory(require('../jsx/components/App'));
  res.send(templateLoader(App, { title: 'Home' }, res.locals, '/main.js'));
});

module.exports = router;
