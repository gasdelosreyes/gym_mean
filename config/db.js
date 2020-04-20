const mongoose = require('mongoose')

const connectDB = async() => {
    let connect = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    console.log(`MongoDB conectado`.green.underline.bold + `: ${connect.connections[0].host}`.yellow);
}

module.exports = connectDB;