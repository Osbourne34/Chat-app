import { FC } from 'react';
import { Loader } from './components';
import { useAuthContext } from './context';

import { Routing } from './pages';

export const App: FC = () => {
  const { firstLoading } = useAuthContext();
  let content;

  if (firstLoading) {
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
