const express = require('express');
const UsuarioController = require('../controllers/usuario');
const router = express.Router();

router.route('/').get(UsuarioController.getUsuarios).post(UsuarioController.createUsuario);
router.route('/:id').get(UsuarioController.getUsuario).put(UsuarioController.updateUsuario).delete(UsuarioController.deleteUsuario);

module.exports = router