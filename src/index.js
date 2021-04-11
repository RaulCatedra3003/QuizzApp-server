const { app } = require('./server');
const connect = require('./db/connect');
const { config } = require('./config');

connect().then(async function onServerInit() {
  config.logger.info(`DB connected`);

  app.listen(config.app.PORT, () => {
    config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
  });
});
