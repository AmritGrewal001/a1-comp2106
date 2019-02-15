var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const rubrics = ['Front End Web Developer', '55% DESIGNER', '45% CODER'];
    const params = {
        title: 'Amritpal Singh Grewal',
        rubrics
    };
  res.render('index', params);
});

module.exports = router;
