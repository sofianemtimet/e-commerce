const mongoose = require('mongoose');

const URI = 'mongodb+srv://dbUser:dbUser@cluster0-shard-00-00.lccr9.mongodb.net:27017,cluster0-shard-00-01.lccr9.mongodb.net:27017,cluster0-shard-00-02.lccr9.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-szkh3h-shard-0&authSource=admin&retryWrites=true&w=majority'

const connectDb = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true } );
    console.log('connected !')
}

module.exports = connectDb;