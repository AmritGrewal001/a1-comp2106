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
        title: 'About me',
        qualities,
        what: 'my portfolio',
        mainline:'I Strive to make every pixel look beautiful',
        myTitle: 'Full Stack Developer',
        myQuality: 'I’m Amritpal Singh, a young enthusiastic web designer and developer, currently located in Canada. I am about to graduate with a web design and development diploma from Georgian College, ON, Canada. I started my career by working as front-end designer/developer for college projects in 2018 I quickly found that I loved design.  During that time I mastered wireframing, user experience and user interface design. My skills, perseverance and desire to learn more have afforded me the opportunities to become a UI Designer and front-end developer. I am a front end web designer/developer. In other words you can say that, I can provide a solution for all your pixel based needs. I truly excel at providing extremly nice, cost effective, full featured, user centered designs. I believe in simplicity so i can provide you a extraordinary work the simple way. That is why I say.... I strive to make every pixel look beautiful !!! :) and I luv what I do......entirely !'
    };
  res.render('about', params);
});


/* GET WORK page. */
router.get('/work', function(req, res, next) {
    const qualities = ['Full Stack Developer', '55% DESIGNER', '45% CODER'];
    const params = {
        title: 'My Work',
        qualities,
        what: 'my portfolio',
        myTitle: 'Full Stack Developer',
        myQuality: 'I am full stack Developer, I have a good hand on the most advanced languages out there. I use MERN stack for most of my projects.'
    };
  res.render('work', params);
});


/* GET SERVICES page. */
router.get('/service', function(req, res, next) {
    const qualities = ['Full Stack Developer', '55% DESIGNER', '45% CODER'];
    const params = {
        title: 'Services',
        qualities,
        what: 'my portfolio',
        myTitle: 'Full Stack Developer',
        myQuality: 'I am full stack Developer, I have a good hand on the most advanced languages out there. I use MERN stack for most of my projects.'
    };
  res.render('service', params);
});


/* GET CONTACT page. */
router.get('/contact', function(req, res, next) {
    const qualities = ['Full Stack Developer', '55% DESIGNER', '45% CODER'];
    const params = {
        title: 'Contact',
        qualities,
        what: 'my portfolio',
        myTitle: 'Full Stack Developer',
        myQuality: 'I am full stack Developer, I have a good hand on the most advanced languages out there. I use MERN stack for most of my projects.'
    };
  res.render('contact', params);
});
module.exports = router;
