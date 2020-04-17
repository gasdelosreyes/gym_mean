var mongoose = require('mongoose')
var Schema = moongose.Schema

var UsuarioSchema = new Schema({
    persona: {
        type: Schema.Types.ObjectId,
        ref: 'Persona',
        required: [true, 'El usuario debe ser una persona.']
    },
    nombre_usuario: {
        type: String,
        required: [true, 'Debe tener un nombre de usuario.']
    },
    contraseña: {
        type: String,
        required: [true, 'El usuario debe tener una contraseña.']
    },
    fecha_ingreso: Date,
    estado: String
})

module.exports = mongoose.model('Usuario', UsuarioSchema)