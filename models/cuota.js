var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CuotaSchema = new Schema({
    socio: {
        type: Schema.Types.ObjectId,
        ref: 'Socio',
        required: [true, 'La cuota debe ser de un socio.']
    },
    fecha_pago: Date,
    entrenamiento: String,
    monto: Number,
    forma_pago: String
})

module.exports = mongoose.model('Cuota', CuotaSchema)