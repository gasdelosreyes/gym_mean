const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Usuario = require('../models/Usuario');

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
        let usuario = await Usuario.findById(req.usuario.id)
        if (!usuario) {
            return next(new ErrorResponse(`No se encontró el usuario con id ${req.usuario.id}`, 404))
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
        const usuario = await Usuario.create(req.body)
        sendTokenResponse(usuario, 200, res);
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
        let usuario = await Usuario.findByIdAndDelete(req.user.id);
        if (!usuario) {
            return next(new ErrorResponse(`No se encontró el usuario con id ${req.user.id}`, 404))
        }
        res.status(200).json({
            success: true,
            message: 'Usuario borrado con éxito.'
        })
    }),
    //@author Gastón De los Reyes
    //@description Loguear un usuario
    //@route POST /gym/usuario/login
    //@access publico
    login: asyncHandler(async(req, res, next) => {
        const { nombre_usuario, contraseña } = req.body;

        //Valida ingreso de parametros
        if (!nombre_usuario || !contraseña) {
            return next(new ErrorResponse('Agregue su nombre de usuario y contraseña', 400));
        }

        //Chequea si hay un usuario usuario
        const usuario = await Usuario.findOne({ nombre_usuario });

        if (!usuario) {
            return next(new ErrorResponse('Credenciales invalidas', 401));
        }

        //Chequea la contraseña
        const match = await usuario.matchPassword(contraseña);
        if (!match) {
            return next(new ErrorResponse('Credenciales invalidas', 401));
        }

        sendTokenResponse(usuario, 200, res);
    })
}

//Obtener el token del modelo, crear la cookie y mandar la respuesta
const sendTokenResponse = (usuario, statusCode, res) => {
    //Create token
    const token = usuario.getSignedJwtToken();
    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    };
    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token
    });
};

module.exports = controller