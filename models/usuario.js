const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var UsuarioSchema = new mongoose.Schema({
    persona: {
        type: mongoose.Types.ObjectId,
        ref: 'Persona',
        required: [true, 'Necesita agregar una persona.']
    },
    rol: {
        type: String,
        enum: ['administrador', 'dueño', 'secretario', 'entrenador', 'usuario'],
        default: 'usuario'
    },
    nombre_usuario: {
        type: String,
        required: [true, 'Necesita agregar un nombre de usuario.'],
        maxlength: [20, 'El nombre de usuario no puede ser tan largo.']
    },
    contraseña: {
        type: String,
        required: [true, 'Necesita agregar una contraseña.'],
        maxlength: [12, 'La contraseña no puede ser tan larga.']
    },
    fecha_ingreso: {
        type: Date,
        default: Date.now
    },
    estado: {
        type: Boolean,
        default: false
    }
})

//Encripta la contraseña usando bcrypt
UsuarioSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
});

//Retorna el JWT al registrar o loguearse
UsuarioSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
}

//Matchea la contraseña entrante con la contraseña de la base de datos
UsuarioSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.contraseña);
}

module.exports = mongoose.model('Usuario', UsuarioSchema)