import { Schema, model } from 'mongoose';

const userModel = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model('User', userModel);
