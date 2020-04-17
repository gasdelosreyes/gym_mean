var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SucursalSchema = new Schema({
    gimnasio: {
        type: Schema.Types.ObjectId,
        ref: 'Gimnasio',
        required: [true, 'La sucursal debe pertenecer a un gimnasio.']
    },
    direccion: String,
    telefono: Number
})

module.exports = mongoose.model('Sucursal', SucursalSchema)