const { logger } = require('../config');

module.exports = (err, req, res, next) => {
  logger.error(err);

  if (req.headersSent) {
    return next(err);
  }

  res.status(500).send({
    data: null,
    error: 'Something went wrong',
  });
};
