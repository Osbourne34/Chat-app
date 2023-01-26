import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Register } from './Register';

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
};
