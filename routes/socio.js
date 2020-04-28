const express = require('express')
const SocioController = require('../controllers/socio')
const router = express.Router()

router.route('/').get(SocioController.getSocios).post(SocioController.createSocio)
router.route('/:id').get(SocioController.getSingleSocio).put(SocioController.updateSocio).delete(SocioController.deleteSocio)

module.exports = router