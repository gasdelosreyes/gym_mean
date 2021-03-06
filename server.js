const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')

// Cargando variables de entorno
dotenv.config({ path: './config/config.env' })

// Conectando a la base de datos
connectDB();

// Conectando a la libreria express
const app = express();

// Middlewares
const errorHandler = require('./middleware/error');

// Body parser
app.use(express.json());

// Logging http requests
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Archivos de rutas
//const personas = require('./routes/personas')
const usuarios = require('./routes/usuario');
const gimnasios = require('./routes/gimnasio');
//const sucursales = require('./routes/sucursal')
//const cuotas = require('./routes/cuota')

// Montar rutas
//app.use('/gym/personas', personas)
app.use('/gym/gimnasios', gimnasios)
app.use('/gym/usuarios', usuarios)
//app.use('/gym/sucursales', sucursales)
//app.use('/gym/cuotas', cuotas)

// Error Middleware
app.use(errorHandler);

// Obteniendo variables de entorno
const PORT = process.env.PORT || 3000

// Conectando al servidor
const server = app.listen(
    PORT,
    console.log(`Servidor corriendo en modo ${process.env.NODE_ENV} escuchando en el puerto:`.cyan.underline.bold + ` ${PORT}`.yellow)
);

//Manejando promesas
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);
    server.close(() => process.exit(1));
});