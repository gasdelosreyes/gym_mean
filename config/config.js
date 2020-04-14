const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })

// ================================
//  Puerto
// ================================
const PORT = process.env.PORT || 3000