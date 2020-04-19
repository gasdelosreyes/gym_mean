const mongoose = require('mongoose')

var CuotaSchema = new mongoose.Schema({
    socio: {
        type: mongoose.Types.ObjectId,
        ref: 'Socio',
        required: [true, 'La cuota debe ser de un socio.']
    },
    fecha_pago: {
        type: Date,
        default: Date.now
    },
    entrenamiento: {
        type: String,
        required: [true, 'Necesita agregar un entrenamiento.'],
        maxlength: [30, 'El entrenamiento no puede ser tan largo.'],
        enum: ['Crossfit', 'Kinesio', 'Otro']
    },
    monto: {
        type: Number,
        required: [true, 'Necesita agregar un monto.']
    },
    forma_pago: {
        type: String,
        required: [true, 'Necesita agregar una forma de pago'],
        enum: ['Credito', 'Debito', 'Efectivo', 'Otro']
    }
})

module.exports = mongoose.model('Cuota', CuotaSchema)