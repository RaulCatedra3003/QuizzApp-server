const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const { config } = require('./config');
const UserRouter = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: config.client.URL,
  }),
);

app.use('/user', UserRouter);

app.use(errorMiddleware);

module.exports = {
  app,
};
