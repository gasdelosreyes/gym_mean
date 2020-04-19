const mongoose = require('mongoose')

var UsuarioSchema = new mongoose.Schema({
    persona: {
        type: mongoose.Types.ObjectId,
        ref: 'Persona',
        required: [true, 'Necesita agregar una persona.']
    },
    t_usuario: {
        type: mongoose.Types.ObjectId,
        ref: 'T_Usuario',
        required: [true, 'Necesita agregar un tipo de usuario.']
    },
    nombre_usuario: {
        type: String,
        required: [true, 'Necesita agregar un nombre de usuario.'],
        maxlength: [20, 'El nombre de usuario no puede ser tan largo.']
    },
    contraseña: {
        type: String,
        required: [true, 'Necesita agregar una contraseña.'],
        maxlength: [12, 'La contraseña no puede ser tan larga.']
    },
    fecha_ingreso: {
        type: Date,
        default: Date.now
    },
    estado: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Usuario', UsuarioSchema)