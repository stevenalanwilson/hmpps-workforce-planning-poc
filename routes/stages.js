const express = require('express');
const router = express.Router();
const dataStages = require('../data/dataStages')

/* GET home page. */
module.exports =  router.get('/new-stage', function(req, res, next) {
  res.render('newstage', { 
    serviceArea: 'Enablers',
    department: 'Prisons',
    team: 'Money to prisoners',
    stages: dataStages
  });
});

module.exports =  router.get('/current-stage', function(req, res, next) {
  res.render('currentstage', { 
    serviceArea: 'Enablers',
    department: 'Prisons',
    team: 'Money to prisoners',
    stages: dataStages
  });
});