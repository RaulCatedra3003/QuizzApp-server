const Router = require('express').Router;

const { authMiddleware } = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const {
  newUserValidationMiddleware,
} = require('../middleware/newUserValidationMiddleware');

const UserRouter = Router();

UserRouter.use(authMiddleware);

UserRouter.get('/:userId', userController.getUserById);
UserRouter.post(
  '/newUser',
  newUserValidationMiddleware,
  userController.newUser,
);

module.exports = UserRouter;
