import { Chat } from '../models/chatModel.js';

export const createChat = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).send('userId param not sent with request');
    }

    const existingChat = await Chat.findOne({
      isGroupChat: false,
      users: { $all: [req.userId, userId] },
    })
      .populate('users', '-password')
      .populate('latestMessage');

    if (existingChat) {
      return res.status(200).send(existingChat);
    }

    const createdChat = await Chat.create({
      isGroupChat: false,
      users: [req.userId, userId],
    });
    const fullChat = await Chat.findById(createdChat._id).populate(
      'users',
      '-password',
    );

    res.status(200).send(fullChat);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getChats = async (req, res) => {
  try {
    const chats = await Chat.find({
      users: {
        _id: req.userId,
      },
    })
      .populate('users', '-password')
      .populate('latestMessage')
      .populate('groupAdmin');

    res.status(200).send(chats);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
