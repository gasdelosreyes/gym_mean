const mongoose = require('mongoose')

var SocioSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'El socio debe ser un usuario.']
    },
    sucursal: {
        type: mongoose.Types.ObjectId,
        ref: 'Sucursal',
        required: [true, 'El socio debe asistir a una sucursal.']
    }
})

module.exports = mongoose.model('Socio', SocioSchema)