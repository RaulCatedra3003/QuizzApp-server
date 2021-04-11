const dotenv = require('dotenv');
const logger = require('loglevel');

dotenv.config();

logger.enableAll();

const config = {
  client: {
    URL: process.env.CLIENT_URL,
  },
  app: {
    PORT: process.env.PORT,
  },
  logger: {
    warn: logger.warn,
    info: logger.info,
    error: logger.error,
    trace: logger.trace,
    debug: logger.debug,
  },
  db: {
    url: `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_PROJECT}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  },
  firebase: {
    certConfig: {
      type: process.env.FB_CERT_TYPE,
      project_id: process.env.FB_CERT_PROJECT_ID,
      private_key_id: process.env.FB_CERT_PRIVATE_KEY_ID,
      private_key: process.env.FB_CERT_PRIVATE_KEY,
      client_email: process.env.FB_CERT_CLIENT_EMAIL,
      client_id: process.env.FB_CERT_CLIENT_ID,
      auth_uri: process.env.FB_CERT_AUTH_URI,
      token_uri: process.env.FB_CERT_TOKEN_URI,
      auth_provider_x509_cert_url:
        process.env.FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
      client_x509_cert_url: process.env.FB_CERT_CLIENT_X_509_CERT_URL,
    },
  },
};

module.exports = {
  config,
};
