const { config } = require('./config');
const { app } = require('./server');

app.listen(config.app.PORT, () => {
  console.log(`Server running at http://localhost:${config.app.PORT}`);
});
