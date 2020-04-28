const express = require('express')
const CuotaController = require('../controllers/cuota')
const router = express.Router()

router.route('/').get(CuotaController.getCuotas).post(CuotaController.createCuota)
router.route('/:id').get(CuotaController.getSingleCuota).put(CuotaController.updateCuota).delete(CuotaController.deleteCuota)

module.exports = router