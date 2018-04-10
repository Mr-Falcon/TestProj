const express = require('express');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('dev'));


const port = 3000;
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`The server is working on port ${port}`);
});


app.get('/', (req, res) => {
    res.status(202).send('<h1>This is the index Page.</h1>');
});


app.get('/user1', (req, res) => {
    res.status(202).send('<h1>This is the USER 1 Page.</h1>');
});