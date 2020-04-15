var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PersonaSchema = new Schema({
    nombre: String,
    apellido: String,
    dni: Number,
    fecha_Nac: Date,
    sexo: String,
    correo: String,
    telefono: Number,
    domicilio: String,
    familia: Number,
    estado: Number,
    altura: Number,
    peso: Number
})

module.exports = mongoose.model('Persona', PersonaSchema)