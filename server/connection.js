const mongoose = require('mongoose');

const URI = 'mongodb+srv://dbUser:dbUser@cluster0.lccr9.mongodb.net/Ecommerce?retryWrites=true&w=majority'

const connectDb = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true } );
    console.log('connected !')
}

module.exports = connectDb;