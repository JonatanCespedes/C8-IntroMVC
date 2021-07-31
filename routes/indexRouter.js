const express = require('express');
let router = express.Router();
let controller = require('../controllers/indexController')

/* GET Home */
router.get('/', controller.index)
router.get('/contacto', controller.contacto)
router.get('/about', controller.about)

module.exports = router;