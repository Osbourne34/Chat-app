import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/generateToken.js';
import { userDto } from '../utils/userDto.js';

export const registerUser = async (req, res) => {
  try {
    const { email, name, password, pic } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send('User already exists');
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      name,
      password: hashPassword,
      pic,
    });

    const token = generateToken({ id: user._id }, '1h');
    res.status(200).send({ user: userDto(user._doc), token });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Wrong Login or Password');
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).send('Wrong Login or Password');
    }

    const token = generateToken({ id: user._id }, '1h');
    res.status(200).send({ user: userDto(user._doc), token });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const allUsers = async (req, res) => {
  try {
    const search = req.query.search
      ? {
          $or: [
            { email: { $regex: req.query.search, $options: 'i' } },
            { name: { $regex: req.query.search, $options: 'i' } },
          ],
        }
      : {};

    const users = await User.find(search)
      .find({
        _id: { $ne: req.userId },
      })
      .select('email name pic');

    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('email name');

    if (!user) {
      return res.status(404).json('User is not found');
    }

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
