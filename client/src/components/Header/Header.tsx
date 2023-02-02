import { FC } from 'react';
import { AccountSettings } from '../AccountSettings/AccountSettings';
import { SearchUsers } from '../SearchUsers/SearchUsers';

export const Header: FC = () => {
  return (
    <header className="flex justify-between items-center px-5 py-4 shadow-md">
      <h1 className="text-2xl font-medium">Chat App</h1>

      <SearchUsers />

      <div className="flex items-center space-x-3">
        <div>Notifications</div>
        <AccountSettings />
      </div>
    </header>
  );
};
