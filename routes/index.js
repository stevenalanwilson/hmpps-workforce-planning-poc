const express = require('express');
const router = express.Router();
const teamsData = require('../data/teamsData')

/* GET home page. */
module.exports =  router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    teams: teamsData
  });
});