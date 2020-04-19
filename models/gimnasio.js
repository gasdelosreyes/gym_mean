const mongoose = require('mongoose')

var GimnasioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Necesita agregar un nombre.'],
        maxlength: [30, 'El nombre no puede ser tan largo.']
    }
})

module.exports = mongoose.model('Gimnasio', GimnasioSchema)