import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Chat } from './Chat';
import { Register } from './Register';
import { Login } from './Login';

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
