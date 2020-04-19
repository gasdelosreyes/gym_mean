const mongoose = require('mongoose')

var T_UsuarioSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        required: [true, 'Necesita agregar una descripción.'],
        maxlength: [200, 'La descripción no puede ser tan larga.']
    },
    rol: {
        type: String,
        required: [true, 'Necesita agregar un rol.'],
        enum: ['Admin', 'Entrenador', 'Secretaria', 'Otro']
    }
})

module.exports = mongoose.model('T_Usuario', T_UsuarioSchema)