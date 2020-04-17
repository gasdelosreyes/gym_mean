var mongoose = require('mongoose')
var Schema = mongoose.Schema

var GimnasioSchema = new Schema({
    nombre: String
})

module.exports = mongoose.model('Gimnasio', GimnasioSchema)