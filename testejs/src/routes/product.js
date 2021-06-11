var express = require('express');
var productController = require('../controllers/productController.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {res.render('product');});



router.get('/:detalle', productController.detalle)

module.exports = router;
