const mongoose = require('mongoose')

var PersonaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, 'Necesita agregar un nombre'],
        maxlength: [25, 'El nombre no puede ser tan largo']
    },
    apellido: {
        type: String,
        trim: true,
        required: [true, 'Necesita agregar un apellido'],
        maxlength: [50, 'El apellido no puede ser tan largo']
    },
    dni: {
        type: Number,
        required: [true, 'Necesita agregar un D.N.I'],
        maxlength: [8, 'El D.N.I no puede tener más de 8 caracteres']
    },
    fechaNac: {
        type: Date,
        required: [true, 'Necesita agregar una fecha de nacimiento'],
        default: Date.now
    },
    sexo: {
        type: String,
        required: [true, 'Necesita agregar su sexo'],
        enum: ['Hombre', 'Mujer', 'Otro']
    },
    correo: {
        type: String,
        required: [true, 'Necesita agregar un nombre'],
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Agregue un correo electronico válido'
        ]
    },
    telefono: {
        type: Number,
        required: [true, 'Necesita agregar un número de telefono'],
        maxlength: [14, 'El número de telefono no debe ser tan largo']
    },
    domicilio: {
        type: String,
        trim: true,
        required: [true, 'Necesita agregar una dirección'],
    },
    estadoCivil: {
        type: String,
        enum: ['Soltero', 'Casado', 'Divorciado', 'Viudo']
    },
    altura: {
        type: Number,
        required: [true, 'Necesita agregar su altura en CM']
    },
    peso: {
        type: Number,
        required: [true, 'Necesita agregar su peso en KG']
    },
    estado: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Persona', PersonaSchema)