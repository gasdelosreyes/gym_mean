const express = require('express');
const UsuarioController = require('../controllers/usuario');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('/registrar').post(UsuarioController.createUsuario);
router.route('/login').post(UsuarioController.login);
router.route('/datos').get(protect, UsuarioController.getUsuario);

module.exports = router