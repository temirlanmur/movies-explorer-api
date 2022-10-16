require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const { NODE_ENV = 'development', PORT = 3000 } = process.env;

// mongoose.connect('mongodb://localhost:27017/movies-explorer');

const app = express();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on port ${PORT}`);
});
