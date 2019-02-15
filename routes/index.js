var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const rubrics = ['-Use the Express Generator to create a new site called lab2', '-Install nodemon and change the script in package.json to using nodemon instead of node', '-Run application (Make sure it\'s using nodemon)'];
    const params = {
        title: 'Assignment 1',
        rubrics
    };
  res.render('index', params);
});

module.exports = router;
