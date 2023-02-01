import { FC, useContext } from 'react';
import { AuthContext } from '../../context';
import { Button, Menu } from '../ui';

export const AccountSettings: FC = () => {
  const context = useContext(AuthContext);

  const handleLogout = () => {
    context?.logoutUser();
  };

  return (
    <Menu>
      <Menu.MenuButton>Я КНОПКА</Menu.MenuButton>
      <Menu.MenuList className="w-24">
        <Menu.MenuItem>Profile</Menu.MenuItem>
        <Menu.MenuItem onClick={handleLogout}>Logout</Menu.MenuItem>
      </Menu.MenuList>
    </Menu>
  );
};
