const Router = require('express').Router;

const { authMiddleware } = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

const UserRouter = Router();

UserRouter.use(authMiddleware);

UserRouter.post('/newUser', userController.newUser);

module.exports = UserRouter;
