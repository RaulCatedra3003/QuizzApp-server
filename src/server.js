const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const { config } = require('./config');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: config.client.URL,
  }),
);

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

module.exports = {
  app,
};
