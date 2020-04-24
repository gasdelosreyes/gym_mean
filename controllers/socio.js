const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Socio = require('../models/socio')

var controller = {
    //@author Montero Facundo
    //@description Obtener todos los socios (Sin select,sort,paginacion)
    //@route GET /api/socio
    //@access privado (Administrador global, Gimnasio asociado).
    getSocios: asyncHandler(async(req, res, next) => {
        let socios = await Socio.find()
        res.status(200).json({
            success: true,
            count: socios.length,
            data: socios
        })
    }),
    //@author Montero Facundo
    //@description Obtener un socio por id
    //@route GET /api/socio/:id
    //@access privado (Administrador global, Gimnasio asociado).
    getSingleSocio: asyncHandler(async(req, res, next) => {
        let socio = await Socio.findById(req.params.id)
        if (!socio) {
            return next(new ErrorResponse(`No se encontró el socio ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: socio
        })
    }),
    //@author Montero Facundo
    //@description Crear un socio
    //@route POST /api/socio
    //@access privado (Administrador global, Gimnasio asociado).
    createSocio: asyncHandler(async(req, res, next) => {
        let socio = await Socio.create(req.body)
        res.status(200).json({
            success: true,
            data: socio
        })
    }),
    //@author Montero Facundo
    //@description Actualizar un socio por id
    //@route PUT /api/socio/:id
    //@access privado (Administrador global).
    updateSocio: asyncHandler(async(req, res, next) => {
        let socio = await Socio.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!socio) {
            return next(new ErrorResponse(`No se encontró el socio ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: socio
        })
    }),
    //@author Montero Facundo
    //@description Borrar un socio por id
    //@route DELETE /api/socio/:id
    //@access privado (Administrador global).
    deleteSocio: asyncHandler(async(req, res, next) => {
        let socio = await Socio.findOneAndDelete(req.params.id)
        if (!socio) {
            return next(new ErrorResponse(`No se encontró el socio ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            message: 'Socio borrado con éxito.'
        })
    })
}

module.exports = controller