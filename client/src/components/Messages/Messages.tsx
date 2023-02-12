import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { io } from 'socket.io-client';

import { useAuthContext, useChatContext } from '../../context';
import { getMessages, createMessage } from '../../service';

import { Message } from './Message/Message';
import { MessageForm } from './MessageForm/MessageForm';
import { Loader } from '../ui';

import { AxiosError } from 'axios';
import { Message as MessageType } from '../../Types';

export const Messages: FC = () => {
  const { currentChat } = useChatContext();
  const { user } = useAuthContext();

  const ref = useRef<HTMLDivElement | null>(null);
  const socket = useRef<any>(null);

  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useLayoutEffect(() => {
    ref.current?.scrollTo(
      0,
      ref.current?.scrollHeight - ref.current?.clientHeight,
    );
  }, [messages]);

  useEffect(() => {
    socket.current = io('http://localhost:5000');
    socket.current.on('new message', (message: MessageType) => {
      setMessages((prevState) => [...prevState, message]);
    });
  }, []);

  useEffect(() => {
    const getChatMessages = async () => {
      try {
        setLoading(true);
        if (currentChat) {
          const response = await getMessages(currentChat._id);
          setMessages(response.data);
        }
      } catch (error) {
        const err = error as AxiosError;
        setError((err.response?.data as string) || err.message);
      } finally {
        setLoading(false);
      }
    };

    if (currentChat) {
      socket.current.emit('join room', currentChat._id);
      getChatMessages();
    }
  }, [currentChat]);

  const sendMessage = async (message: string) => {
    if (currentChat) {
      const response = await createMessage({
        chatId: currentChat._id,
        content: message,
      });
      setMessages([...messages, response.data]);

      socket.current.emit('send message', response.data);
    }
  };

  let content;

  if (loading) {
    content = (
      <div className="h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  } else if (error) {
    content = (
      <div className="h-full flex items-center justify-center">
        <p className="text-3xl font-medium text-red-600">{error}</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex-grow"></div>
        {messages.map(({ _id, content, sender }) => (
          <Message
            key={_id}
            content={content}
            senderIm={sender === user?._id}
          />
        ))}
      </>
    );
  }

  return (
    <>
      {currentChat ? (
        <div className="h-full pb-4 flex flex-col justify-end">
          <div className="p-4 border-b text-center text-xl font-medium">
            {currentChat.users.find((u) => u._id !== user?._id)?.name}
          </div>
          <div
            ref={ref}
            className="flex flex-col flex-grow space-y-1 overflow-y-auto pb-4 px-4"
          >
            {content}
          </div>

          {!(loading || error) && <MessageForm onSubmit={sendMessage} />}
        </div>
      ) : (
        <div className="h-full flex justify-center items-center p-4">
          <p className="bg-gray-200 px-4 py-2 rounded-full text-xl font-medium">
            Choose who you would like to write to
          </p>
        </div>
      )}
    </>
  );
};
