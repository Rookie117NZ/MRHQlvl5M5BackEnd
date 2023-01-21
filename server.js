const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT
const app = express();
const mongodb = require('./mongoose');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.get('/', mongodb.getReviews);

app.listen(PORT, () => {
    console.log(`Green light at ${PORT}`)
});