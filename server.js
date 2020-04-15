const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const connectDB = require('./config/db')

// Cargando variables de entorno
dotenv.config({ path: './config/config.env' })

// Conectando express
const app = express()

// Obteniendo variables de entorno
const PORT = process.env.PORT || 3000

// Conectando a la base de datos
connectDB()

// Conectando al servidor
app.listen(PORT, console.log('Escuchando puerto', PORT))