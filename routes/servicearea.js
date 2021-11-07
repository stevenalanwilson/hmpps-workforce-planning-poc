const express = require('express');
const router = express.Router();
const serviceAreaRolesData = require('../data/serviceAreaRolesData')

/* GET home page. */
module.exports =  router.get('/service-area', function(req, res, next) {
  res.render('servicearea', { 
    serviceArea: 'Enablers',
    department: 'Prisons',
    roles: serviceAreaRolesData
  });
});