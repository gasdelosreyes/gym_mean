const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Cuota = require('../models/cuota')

var controller = {
    //@author Montero Facundo
    //@description Obtener todas las cuotas (Sin select,sort,paginacion)
    //@route GET /api/cuota
    //@access privado (Administrador global, Gimnasio asociado).
    getCuotas: asyncHandler(async(req, res, next) => {
        let cuotas = await Cuota.find()
        res.status(200).json({
            success: true,
            count: cuotas.length,
            data: cuotas
        })
    }),
    //@author Montero Facundo
    //@description Obtener una cuota por id
    //@route GET /api/cuota/:id
    //@access privado (Administrador global, Gimnasio asociado).
    getSingleCuota: asyncHandler(async(req, res, next) => {
        let cuota = await Cuota.findById(req.params.id)
        if (!cuota) {
            return next(new ErrorResponse(`No se encontró la cuota con el id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: cuota
        })
    }),
    //@author Montero Facundo
    //@description Crea una cuota
    //@route POST /api/cuota
    //@access privado (Administrador global, Gimnasio asociado).
    createCuota: asyncHandler(async(req, res, next) => {
        let cuota = await Cuota.create(req.body)
        res.status(200).json({
            success: true,
            data: cuota
        })
    }),
    //@author Montero Facundo
    //@description Actualizar una cuota por id
    //@route PUT /api/cuota/:id
    //@access privado (Administrador global, Gimnasio asociado).
    updateCuota: asyncHandler(async(req, res, next) => {
        let cuota = await Cuota.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!cuota) {
            return next(new ErrorResponse(`No se encontró la cuota con el id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: cuota
        })
    }),
    //@author Montero Facundo
    //@description Borrar una cuota por id
    //@route DELETE /api/cuota/:id
    //@access privado (Administrador global).
    deleteCuota: asyncHandler(async(req, res, next) => {
        let cuota = await Cuota.findByIdAndDelete(req.params.id)
        if (!cuota) {
            return next(new ErrorResponse(`No se encontró la cuota con el id ${req.params.id}`))
        }
        res.status(200).json({
            success: true,
            message: 'Cuota borrada con éxito.'
        })
    })
}

module.exports = controller