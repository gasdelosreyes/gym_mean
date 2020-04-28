const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const fs = require('fs')
const path = require('path')

const Gimnasio = require('../models/Gimnasio');

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
            return next(new ErrorResponse(`Gimnasio no encontrado con el id ${req.params.id}`, 404))
        }
        res.status(200).json({
            success: true,
            message: 'Gimnasio borrado con éxito.'
        })
    }),
    //@author Montero Facundo
    //@description Subir un logo del gimnasio por id
    //@route UPDATE /api/gimnasio/:id
    //@access privado (Administrador global, Dueño).
    upload: asyncHandler(async(req, res, next) => {
        var file_name = 'Imagen no subida.'
        if (!req.files) {
            return next(new ErrorResponse(`${file_name}`, 404))
        }
        // Conseguir nombre y extensión
        let file_path = req.files.file0.path
        let file_split = file_path.split('\\')
            // Nombre del archivo
        var file_name = file_split[2]
            // Extensión del archivo
        let extension_split = file_name.split('\.')
        let file_ext = extension_split[1]
            // Comprobar la extensión
        if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg') {
            // Borrar el archivo
            fs.unlink(file_path, (err) => {
                return next(new ErrorResponse('La extensión de la imagen no es válida', 404))
            })
        } else {
            // Cargamos la imagen updateando gimnasio
            let gimnasio = await Gimnasio.findOneAndUpdate({ _id: req.params.id }, { logo: file_name }, { new: true }, (err, gimnasioMod) => {
                if (err || !gimnasioMod) {
                    return next(new ErrorResponse('Error al subir la imagen.', 500))
                }
                return res.status(200).json({
                    success: true,
                    data: gimnasioMod
                })
            })
        }

    })

}

module.exports = controller