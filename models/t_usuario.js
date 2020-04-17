var mongoose = require('mongoose')
var Schema = new Schema

var T_UsuarioSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'El tipo de usuario necesita tener un usuario definido.']
    },
    descripcion: String,
    rol: String
})

module.exports = mongoose.model('T_Usuario', T_UsuarioSchema)