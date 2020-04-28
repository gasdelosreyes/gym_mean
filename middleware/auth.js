const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const Usuario = require('../models/Usuario');

//Protección de rutas
exports.protect = asyncHandler(async(req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    //Verifica existencia del token
    if (!token) {
        return next(new ErrorResponse('El usuario no está autorizado a acceder a esta página', 401));
    }
    try {
        //Verificar token
        //Para decodificar el token hay que ingresar la palabra secreta
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = await Usuario.findById(decoded.id);
        next();
    } catch (error) {
        return next(new ErrorResponse('El usuario no está autorizado a acceder a esta página', 401));
    }
});

//Garantizar el acceso por rol
exports.autorizar = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.usuario.rol)) {
            return next(new ErrorResponse(`El rol ${req.usuario.rol} no está autorizado para ingresar a esta página`, 403));
        }
        next();
    }
}