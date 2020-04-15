const mongoose = require('mongoose')

const connectDB = async() => {
    let connect = await mongoose.connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    console.log('MongoDB conectado:'.green.underline.bolds + ` ${connect.connection.host}`.yellow);
}

module.exports = connectDB