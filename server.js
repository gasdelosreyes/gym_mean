const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config({ path: './config/config.env' })

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log('Escuchando puerto', PORT))