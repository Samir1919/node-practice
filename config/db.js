const mongoose = require('mongoose')
// const MONGO_URL = 'mongodb://UserAdmin:SamSam90@localhost:27017/ex';
const connectDB = async () => {
    const connection = await mongoose.connect("mongodb://localhost:27017/ex", {
        "auth": {
            "authSource": "admin"
        },
        "user": "UserAdmin",
        "pass": "SamSam90",
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`)
}

module.exports = connectDB