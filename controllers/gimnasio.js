const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Gimnasio = require('../models/gimnasio');

const controller = {
    //@author Montero Facundo
    //@description Obtener todas los gimnasios (Sin select,sort,paginacion)
    //@route GET /api/gimnasio
    //@access privado (Administrador global).
    getGimnasios: asyncHandler(async(req, res, next) => {
        let gimnasios = await Gimnasio.find()
        res.status(200).json({
            success: true,
            count: gimnasios.length,
            data: gimnasios
        })
    }),
    //@author Montero Facundo
    //@description Obtener un gimnasio por id
    //@route GET /api/gimnasio/:id
    //@access privado (Administrador global, Gimnasio asociado).
    getSingleGimnasio: asyncHandler(async(req, res, next) => {
        let gimnasio = await Gimnasio.findById(req.params.id)
        if (!gimnasio) {
            return next(new ErrorResponse(`Gimnasio no encontrado con el ID ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: gimnasio
        })
    }),
    //@author Montero Facundo
    //@description Crear un gimnasio
    //@route POST /api/gimnasio
    //@access privado (Administrador global).
    createGimnasio: asyncHandler(async(req, res, next) => {
        let gimnasio = await Gimnasio.create(req.body)
        res.status(200).json({
            success: true,
            data: gimnasio
        })
    }),
    //@author Montero Facundo
    //@description Actualizar un gimnasio por id
    //@route UPDATE /api/gimnasio/:id
    //@access privado (Administrador global).
    updateGimnasio: asyncHandler(async(req, res, next) => {
        let gimnasio = await Gimnasio.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!gimnasio) {
            return next(new ErrorResponse(`Gimnasio no encontrado con el id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: gimnasio
        })
    }),
    //@author Montero Facundo
    //@description Borrar un gimnasio por id
    //@route DELETE /api/gimnasio/:id
    //@access privado (Administrador global).
    deleteGimnasio: asyncHandler(async(req, res, next) => {
        let gimnasio = await Gimnasio.findByIdAndDelete(req.params.id)
        if (!gimnasio) {
            return next(new ErrorResponde(`Gimnasio no encontrado con el id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            message: 'Gimnasio borrado con éxito.'
        })
    })
}

module.exports = controller