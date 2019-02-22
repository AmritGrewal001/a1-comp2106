// ------------------------------------------------------------------------------------------------------------
//File Name: index.js
//Author: Amrit Grewal
//Site: portfolio-amrit.herokuapp.com
//Description: This file code defines routes for all the site pages
// ------------------------------------------------------------------------------------------------------------



var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const qualities = ['Full Stack Developer', '55% DESIGNER', '45% CODER'];
    const params = {
        title: 'Hi, I am Amritpal Singh Grewal',
        qualities,
        myTitle: 'Full Stack Developer',
        myQuality: 'I am full stack Developer, I have a good hand on the most advanced languages out there. I use MERN stack for most of my projects.'
    };
  res.render('index', params);
});


/* GET ABOUT page. */
router.get('/about', function(req, res, next) {
    const qualities = ['Full Stack Developer', '55% DESIGNER', '45% CODER'];
    const params = {
        title: 'Hi, I am Amritpal Singh Grewal',
        qualities,
        what: 'game',
        myTitle: 'Full Stack Developer',
        myQuality: 'I am full stack Developer, I have a good hand on the most advanced languages out there. I use MERN stack for most of my projects.'
    };
  res.render('about', params);
});


/* GET WORK page. */
router.get('/work', function(req, res, next) {
    const qualities = ['Full Stack Developer', '55% DESIGNER', '45% CODER'];
    const params = {
        title: 'Hi, I am Amritpal Singh Grewal',
        qualities,
        what: 'game',
        myTitle: 'Full Stack Developer',
        myQuality: 'I am full stack Developer, I have a good hand on the most advanced languages out there. I use MERN stack for most of my projects.'
    };
  res.render('work', params);
});


/* GET SERVICES page. */
router.get('/service', function(req, res, next) {
    const qualities = ['Full Stack Developer', '55% DESIGNER', '45% CODER'];
    const params = {
        title: 'Hi, I am Amritpal Singh Grewal',
        qualities,
        what: 'game',
        myTitle: 'Full Stack Developer',
        myQuality: 'I am full stack Developer, I have a good hand on the most advanced languages out there. I use MERN stack for most of my projects.'
    };
  res.render('service', params);
});


/* GET CONTACT page. */
router.get('/contact', function(req, res, next) {
    const qualities = ['Full Stack Developer', '55% DESIGNER', '45% CODER'];
    const params = {
        title: 'Hi, I am Amritpal Singh Grewal',
        qualities,
        what: 'game',
        myTitle: 'Full Stack Developer',
        myQuality: 'I am full stack Developer, I have a good hand on the most advanced languages out there. I use MERN stack for most of my projects.'
    };
  res.render('contact', params);
});
module.exports = router;
