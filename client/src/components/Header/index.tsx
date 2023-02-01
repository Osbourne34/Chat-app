import { FC, useState, MouseEvent } from 'react';
import { AccountSettings } from '../AccountSettings';
import { SearchUsers } from '../SearchUsers';

export const Header: FC = () => {
  return (
    <header className="flex justify-between items-center p-5 shadow-md">
      <h1 className="text-2xl font-medium">Chat App</h1>

      <SearchUsers />

      <div className="flex items-center">
        <div>Notifications</div>
        <AccountSettings />
      </div>
    </header>
  );
};
