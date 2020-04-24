const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Sucursal = require('../models/sucursal')

var controller = {
    //@author Montero Facundo
    //@description Obtener todas las sucursales (Sin select,sort,paginacion)
    //@route GET /api/sucursal
    //@access privado (Administrador global).
    getSucursales: asyncHandler(async(req, res, next) => {
        let sucursales = await Sucursal.find()
        res.status(200).json({
            success: true,
            count: sucursales.length,
            data: sucursales
        })
    }),
    //@author Montero Facundo
    //@description Obtener una sucursal por id
    //@route GET /api/sucursal/:id
    //@access privado (Administrador global).
    getSingleSucursal: asyncHandler(async(req, res, next) => {
        let sucursal = await Sucursal.findById(req.params.id)
        if (!sucursal) {
            return next(new ErrorResponse(`No se encontró la sucursal con el id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: sucursal
        })
    }),
    //@author Montero Facundo
    //@description Crea una sucursal
    //@route POST /api/sucursal
    //@access privado (Administrador global).
    createSucursal: asyncHandler(async(req, res, next) => {
        let sucursal = await Sucursal.create(req.body)
        res.status(200).json({
            success: true,
            data: sucursal
        })
    }),
    //@author Montero Facundo
    //@description Actualiza una sucursal por id
    //@route PUT /api/sucursal/:id
    //@access privado (Administrador global).
    updateSucursal: asyncHandler(async(req, res, next) => {
        let sucursal = await Sucursal.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!sucursal) {
            return next(new ErrorResponse(`No se encontró la sucursal con el id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: sucursal
        })
    }),
    //@author Montero Facundo
    //@description Borra una sucursal por id
    //@route DELETE /api/sucursal/:id
    //@access privado (Administrador global).
    deleteSucursal: asyncHandler(async(req, res, next) => {
        let sucursal = await Sucursal.findByIdAndDelete(req.params.id)
        if (!sucursal) {
            return next(new ErrorResponse(`No se encontró la sucursal con el id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            message: 'Sucursal borrada con éxito.'
        })
    })
}

module.exports = controller