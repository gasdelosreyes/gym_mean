const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Usuario = require('../models/usuario')

var controller = {
    //@author Montero Facundo
    //@description Obtener todas los usuarios (Sin select,sort,paginacion)
    //@route GET /api/usuario
    //@access privado (Administrador global).
    getUsuarios: asyncHandler(async(req, res, next) => {
        let usuarios = await Usuario.find()
        res.status(200).json({
            success: true,
            count: usuarios.length,
            data: usuarios
        })
    }),
    //@author Montero Facundo
    //@description Obtener un usuario por id
    //@route GET /api/usuario/:id
    //@access privado (Administrador global,Gimnasio asociado).
    getUsuario: asyncHandler(async(req, res, next) => {
        let usuario = await Usuario.findById(req.params.id)
        if (!usuario) {
            return next(new ErrorResponse(`No se encontró el usuario con id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: usuario
        })
    }),
    //@author Montero Facundo
    //@description Crear un usuario
    //@route POST /api/usuario
    //@access privado (Administrador global, Gimnasio asociado).
    createUsuario: asyncHandler(async(req, res, next) => {
        let usuario = await Usuario.create(req.body)
        res.status(200).json({
            success: true,
            data: usuario
        })
    }),
    //@author Montero Facundo
    //@description Actualizar un usuario por id
    //@route UPDATE /api/gimnasio/:id
    //@access privado (Administrador global).
    updateUsuario: asyncHandler(async(req, res, next) => {
        let usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!usuario) {
            return next(new ErrorResponse(`No se encontró el usuario con id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: usuario
        })
    }),
    //@author Montero Facundo
    //@description Borrar un usuario por id
    //@route DELETE /api/usuario/:id
    //@access privado (Administrador global).
    deleteUsuario: asyncHandler(async(req, res, next) => {
        let usuario = await Usuario.findByIdAndDelete(req.params.id)
        if (!usuario) {
            return next(new ErrorResponse(`No se encontró el usuario con id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            message: 'Usuario borrado con éxito.'
        })
    })
}

module.exports = controller