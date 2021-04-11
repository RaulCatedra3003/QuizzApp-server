const db = require('../models');

async function newUser(req, res, next) {
  const { id, firstName, lastName, email } = req.body;

  try {
    const user = await db.User.create({
      _id: id,
      firstName,
      lastName,
      email,
    });

    res.status(200).send({
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        rol: user.rol,
      },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  newUser,
};
