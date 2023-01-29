import { FC } from 'react';
import { SearchUsers } from '../SearchUsers';
import { Button, Dropdown } from '../ui';

export const Header: FC = () => {
  return (
    <header className="flex justify-between items-center p-5 shadow-md">
      <h1 className="text-2xl font-medium">Chat App</h1>

      <SearchUsers />

      <div className="flex items-center">
        <div>Notifications</div>
        <Dropdown
          trigger={(props) => (
            <button {...props} className="text-red-400">
              button
            </button>
          )}
        >
          <Button className="w-full">My profile</Button>
          <Button className="w-full">Logout</Button>
        </Dropdown>
      </div>
    </header>
  );
};
