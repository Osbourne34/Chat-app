import { FC, useState, MouseEvent } from 'react';
import { SearchUsers } from '../SearchUsers';
import { Button, Menu } from '../ui';

export const Header: FC = () => {
  return (
    <header className="flex justify-between items-center p-5 shadow-md">
      <h1 className="text-2xl font-medium">Chat App</h1>

      <SearchUsers />

      <div className="flex items-center">
        <div>Notifications</div>
        <button>Open Menu</button>
        <Menu>
          <Menu.MenuButton>Я КНОПКА</Menu.MenuButton>
          <Menu.MenuList>
            {['asdasdasd', '1asdasdsadasd212', 'asdasdasd'].map(
              (i: any, idx: number) => (
                <Menu.MenuItem onClick={() => console.log('click')} key={idx}>
                  {i}
                </Menu.MenuItem>
              )
            )}
          </Menu.MenuList>
        </Menu>
      </div>
    </header>
  );
};
