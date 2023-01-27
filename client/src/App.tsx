import { FC, useContext } from 'react';
import { Loader } from './components';
import { AuthContext } from './context';

import { Routing } from './pages';

export const App: FC = () => {
  const context = useContext(AuthContext);
  let content;

  if (context?.firstLoading) {
    content = (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  } else {
    content = <Routing />;
  }

  return content;
};
