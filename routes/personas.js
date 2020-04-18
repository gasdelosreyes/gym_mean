const express = require('express');
const PersonaController = require('../controllers/personas');
const router = express.Router();

router.route('/').get(PersonaController.getPersonas).post(PersonaController.createPersona);
router.route('/:id').get(PersonaController.getSinglePersona).put(PersonaController.updatePersona).delete(PersonaController.deletePersona);

module.exports = router