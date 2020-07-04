const express = require('express')
const SucursalController = require('../controllers/sucursal')
const router = express.Router()

router.route('/').get(SucursalController.getSucursales).post(SucursalController.createSucursal);
router.route('/:id').get(SucursalController.getSingleSucursal).put(SucursalController.updateSucursal).delete(SucursalController.deleteSucursal);

module.exports = router