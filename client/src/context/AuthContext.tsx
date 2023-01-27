import { AxiosError } from 'axios';
import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { login, register } from '../service';
import { User } from '../Types';

type AuthContextType = {
  user: User | null;

  registerError: string;
  setRegisterError: Dispatch<SetStateAction<string>>;
  loginError: string;
  setLoginError: Dispatch<SetStateAction<string>>;

  registerUser: (body: {
    email: string;
    name: string;
    password: string;
  }) => void;
  loginUser: (body: { email: string; password: string }) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [user, setUser] = useState<User | null>(null);
  const [registerError, setRegisterError] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');

  const registerUser = async (body: {
    email: string;
    name: string;
    password: string;
  }) => {
    try {
      if (registerError) {
        setRegisterError('');
      }

      const response = await register(body);

      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
    } catch (error) {
      const err = error as AxiosError;
      setRegisterError((err.response?.data as string) || err.message);
    }
  };

  const loginUser = async (body: { email: string; password: string }) => {
    try {
      if (loginError) {
        setLoginError('');
      }

      const response = await login(body);

      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
    } catch (error) {
      const err = error as AxiosError;
      setLoginError((err.response?.data as string) || err.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        registerError,
        setRegisterError,
        loginError,
        setLoginError,
        registerUser,
        loginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
