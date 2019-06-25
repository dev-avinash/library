require('dotenv').config();

const express = require('express');
const app = express();

const index = require('./app/routes/index.js');

app.get('/', index);

app.listen(process.env.PORT, () => console.log(`Open http://localhost:${process.env.PORT} to see a response.`));
