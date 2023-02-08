import { Chat } from '../models/chatModel.js';
import { Message } from '../models/messageModel.js';

export const createMessage = async (req, res) => {
  try {
    const { chatId, content } = req.body;

    if (!chatId || !content) {
      return res.status(400).send('Required fields chatId and content');
    }

    let newMessage = await Message.create({
      sender: req.userId,
      chat: chatId,
      content,
    });

    newMessage = await newMessage.populate('sender', '-password');
    newMessage = await newMessage.populate('chat');

    await Chat.findByIdAndUpdate(chatId, {
      latestMessage: newMessage,
    });

    res.status(200).send(newMessage);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getMessages = async (req, res) => {
  try {
    const { chatId } = req.params;

    const messages = await Message.find({ chat: chatId });

    res.status(200).send(messages);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
