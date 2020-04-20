const express = require('express')
const GimnasioController = require('../controllers/gimnasio')
const router = express.Router()

router.route('/').get(GimnasioController.getGimnasios).post(GimnasioController.createGimnasio)
router.route('/:id').get(GimnasioController.getSingleGimnasio).put(GimnasioController.updateGimnasio).delete(GimnasioController.deleteGimnasio)

module.exports = router