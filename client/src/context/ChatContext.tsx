import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getUserChat, startChatting } from '../service/chatService';
import { AxiosError } from 'axios';

import { Chat } from '../Types';

type ChatContextType = {
  chats: Chat[];
  loadingChats: boolean;
  errorChats: string;
  currentChat: string;
  setCurrentChat: Dispatch<SetStateAction<string>>;
  createChat: (userId: string) => void;
};

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loadingChats, setLoadingChats] = useState<boolean>(false);
  const [errorChats, setErrorChats] = useState<string>('');
  const [currentChat, setCurrentChat] = useState<string>('');

  useEffect(() => {
    const getChats = async () => {
      setLoadingChats(true);
      try {
        const response = await getUserChat();
        setChats(response.data);
      } catch (error) {
        const err = error as AxiosError;
        setErrorChats((err.response?.data as string) || err.message);
      } finally {
        setLoadingChats(false);
      }
    };

    getChats();
  }, []);

  const createChat = async (userId: string) => {
    try {
      const response = await startChatting({ userId });
      if (!chats.find((chat) => chat._id === response.data._id)) {
        setChats([...chats, response.data]);
      }
      setCurrentChat(response.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        loadingChats,
        errorChats,
        currentChat,
        createChat,
        setCurrentChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error('No context');
  }

  return context;
};
