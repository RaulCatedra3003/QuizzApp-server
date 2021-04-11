const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    _id: { type: String, required: [true, 'User id is required'] },
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    email: { type: String, required: [true, 'email is required'], trim: true },
    rol: { type: String, trim: true, default: 'user', enum: ['user', 'admin'] },
  },
  {
    timestamps: true,
  },
);

const UserModel = new mongoose.model('user', UserSchema);

module.exports = UserModel;
