const dotenv = require('dotenv');

dotenv.config();

const config = {
  client: {
    URL: process.env.CLIENT_URL,
  },
  app: {
    PORT: process.env.PORT,
  },
};

module.exports = {
  config,
};
