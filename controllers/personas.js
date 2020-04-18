const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Persona = require('../models/Persona');

const controller = {
    //@author Gastón De los Reyes
    //@description Obtener todas las personas (Sin select,sort,paginacion)
    //@route GET /api/personas
    //@access privado (Administrador global).
    getPersonas: asyncHandler(async(req, res, next) => {
        let persona = await Persona.find();
        res.status(200).json({
            success: true,
            count: persona.length,
            data: persona
        });
    }),
    //@author Gastón De los Reyes
    //@description Obtener una persona por ID
    //@route GET /api/personas/:id
    //@access privado (Usuario asociado, Gimnasio asociado, Administrador global).
    getSinglePersona: asyncHandler(async(req, res, next) => {
        let persona = await Persona.findById(req.params.id);
        if (!persona) {
            return next(new ErrorResponse(`Persona no encontrada con el ID ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            data: persona
        });
    }),
    //@author Gastón De los Reyes
    //@description Crear una persona
    //@route POST /api/personas
    //@access privado (Usuario asociado).
    createPersona: asyncHandler(async(req, res, next) => {
        let persona = await Persona.create(req.body);
        res.status(200).json({
            success: true,
            data: persona
        });
    }),
    //@author Gastón De los Reyes
    //@description Actualizar la persona por ID
    //@route UPDATE /api/personas/:id
    //@access privado (Usuario asociado).
    updatePersona: asyncHandler(async(req, res, next) => {
        let persona = await Persona.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!persona) {
            return next(new ErrorResponse(`Persona no encontrada con el ID ${req.params.id}`, 404));
        }
        res.status(200).json({
            success: true,
            data: persona
        });
    }),
    //@author Gastón De los Reyes
    //@description Borrar una persona por ID
    //@route DELETE /api/personas/:id
    //@access privado (Administrador global).
    deletePersona: asyncHandler(async(req, res, next) => {
        let persona = await Persona.findByIdAndDelete(req.params.id);
        if (!persona) {
            return next(new ErrorResponse(`Persona no encontrada con el ID ${req.params.id}`), 404);
        }
        res.status(200).json({
            success: true,
            message: 'Persona borrada con exito'
        });
    })
};

module.exports = controller;