import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { login, register, getMe } from '../service';
import { AxiosError } from 'axios';

import { User } from '../Types';

type AuthContextType = {
  firstLoading: Boolean;
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
  logoutUser: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [firstLoading, setFirstLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [registerError, setRegisterError] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const me = async () => {
        try {
          const response = await getMe();
          setUser(response.data);
        } catch (error) {
          localStorage.removeItem('token');
        } finally {
          setFirstLoading(false);
        }
      };
      me();
    } else {
      setFirstLoading(false);
    }
  }, []);

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

  const logoutUser = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        firstLoading,
        user,
        registerError,
        setRegisterError,
        loginError,
        setLoginError,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('No context');
  }

  return context;
};
