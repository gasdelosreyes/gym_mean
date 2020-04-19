const mongoose = require('mongoose')

var SucursalSchema = new mongoose.Schema({
    gimnasio: {
        type: mongoose.Types.ObjectId,
        ref: 'Gimnasio',
        required: [true, 'Necesita agregar un gimnasio.']
    },
    direccion: {
        type: String,
        required: [true, 'Necesita agregar una dirección.']
    },
    telefono: {
        type: Number,
        required: [true, 'Necesita agregar un telefono.'],
        maxlength: [12, 'El numero de telefono no es válido']
    }
})

module.exports = mongoose.model('Sucursal', SucursalSchema)