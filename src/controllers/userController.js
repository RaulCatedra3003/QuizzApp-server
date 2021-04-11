const db = require('../models');

async function getUserById(req, res, next) {
  const { userId } = req.params;

  try {
    const user = await db.User.find({ _id: userId });

    res.status(200).send({
      data: {
        id: user[0]._id,
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        email: user[0].email,
        rol: user[0].rol,
      },
    });
  } catch (error) {
    next(error);
  }
}

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
  getUserById,
};
