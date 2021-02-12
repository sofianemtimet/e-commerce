const express = require('express');
const app = express();
const connectDb = require('./connection');
const port = process.env.Port || 3000;

app.listen(port, () => {
    console.log('server started on port : ' + port)
})