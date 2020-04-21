const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const T_Usuario = require('../models/t_usuario')

var controller = {
    //@author Montero Facundo
    //@description Obtener todas los tipos de usuarios (Sin select,sort,paginacion)
    //@route GET /api/t_usuario
    //@access privado (Administrador global).
    getT_Usuario: asyncHandler(async(req, res, next) => {
        let t_usuario = await T_Usuario.find()
        res.status(200).json({
            success: true,
            count: t_usuario.length,
            data: t_usuario
        })
    }),
    //@author Montero Facundo
    //@description Obtener un tipo de usuario por id
    //@route GET /api/t_usuario/:id
    //@access privado (Administrador global).
    getSingleT_Usuario: asyncHandler(async(req, res, next) => {
        let t_usuario = await T_Usuario.findById(req.params.id)
        if (!t_usuario) {
            return next(new ErrorResponse(`No se encontró el tipo de usuario con el id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: t_usuario
        })
    }),
    //@author Montero Facundo
    //@description Crear un tipo de usuario
    //@route POST /api/t_usuario
    //@access privado (Administrador global).
    createT_Usuario: asyncHandler(async(req, res, next) => {
        let t_usuario = await T_Usuario.create(req.body)
        res.status(200).json({
            success: true,
            data: t_usuario
        })
    }),
    //@author Montero Facundo
    //@description Actualizar un tipo de usuario
    //@route PUT /api/t_usuario/:id
    //@access privado (Administrador global).
    updateT_Usuario: asyncHandler(async(req, res, next) => {
        let t_usuario = await T_Usuario.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!t_usuario) {
            return next(new ErrorResponse(`No se encontró el tipo de usuario con el id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: t_usuario
        })
    }),
    //@author Montero Facundo
    //@description Actualizar un tipo de usuario
    //@route PUT /api/t_usuario/:id
    //@access privado (Administrador global).
    deleteT_Usuario: asyncHandler(async(req, res, next) => {
        let t_usuario = await T_Usuario.findByIdAndDelete(req.params.id)
        if (!t_usuario) {
            return next(new ErrorResponse(`No se encontró el tipo de usuario con el id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            message: 'El tipo de usuario fue borrado con éxito.'
        })
    })
}

module.exports = controller