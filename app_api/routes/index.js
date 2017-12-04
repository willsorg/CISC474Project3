var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var ctrlProperty = require('../controllers/property');


// Property Returns
//router.get('/property', ctrlProperty.returnProperty);
router.get('/all', ctrlProperty.allProperties);

// Post Property

router.post('/postProperty', ctrlProperty.postProperty);


//Find property
router.post('/propertyByAddress', ctrlProperty.propertyByAddress);


module.exports = router;