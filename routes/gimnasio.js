const express = require('express')
const GimnasioController = require('../controllers/gimnasio');
const { protect, autorizar } = require('../middleware/auth');
const router = express.Router()

const routerSucursal = require('./sucursal');

router.use('/:gymId/sucursal',routerSucursal);

router.route('/').get(GimnasioController.getGimnasios).post(protect, autorizar('socio', 'administrador'), GimnasioController.createGimnasio);
router.route('/:id').get(GimnasioController.getSingleGimnasio).put(protect, autorizar('socio', 'administrador'), GimnasioController.updateGimnasio).delete(protect, autorizar('administrador'), GimnasioController.deleteGimnasio);

module.exports = router