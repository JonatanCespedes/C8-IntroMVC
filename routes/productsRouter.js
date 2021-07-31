let express = require('express');
let router = express.Router();
let controller = require('../controllers/productsController')

/* GET lista productos */
router.get('/', controller.productos)

/* GET detalle de producto */
router.get('/detail/:producto', controller.producto)

module.exports = router;