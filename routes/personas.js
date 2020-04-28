const express = require('express');
const PersonaController = require('../controllers/personas');
const { protect, autorizar } = require('../middleware/auth');
const router = express.Router();


router.route('/').get(protect, autorizar('administrador'), PersonaController.getPersonas).post(PersonaController.createPersona);
router.route('/:id').get(protect, PersonaController.getSinglePersona).put(protect, PersonaController.updatePersona).delete(protect, autorizar('administrador'), PersonaController.deletePersona);

module.exports = router