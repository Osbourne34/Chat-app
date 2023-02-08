import { FC } from 'react';
import { useAuthContext } from './context';

import { Routing } from './pages';
import { Loader } from './components/ui';

export const App: FC = () => {
  const { firstLoading } = useAuthContext();
  let content;

  if (firstLoading) {
    content = (
      <div className="h-screen flex items-center justify-center">
        <Loader size={100} />
      </div>
    );
  } else {
    content = <Routing />;
  }

  return content;
};
