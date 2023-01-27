import { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Register } from './Register';
import { Login } from './Login';

export const Routing: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
