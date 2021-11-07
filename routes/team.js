const express = require('express');
const router = express.Router();
const serviceAreaRolesData = require('../data/serviceAreaRolesData')

/* GET home page. */
module.exports =  router.get('/team', function(req, res, next) {
  res.render('team', { 
    serviceArea: 'Enablers',
    department: 'Prisons',
    team: 'Money to prisoners',
    roles: serviceAreaRolesData
  });
});