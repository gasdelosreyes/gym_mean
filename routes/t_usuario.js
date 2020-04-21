const express = require('express')
const T_UsuarioController = require('../controllers/t_usuario')
const router = express.Router()

router.route('/').get(T_UsuarioController.getT_Usuario).post(T_UsuarioController.createT_Usuario)
router.route('/:id').get(T_UsuarioController.getSingleT_Usuario).put(T_UsuarioController.updateT_Usuario).delete(T_UsuarioController.deleteT_Usuario)

module.exports = router