import { FC } from 'react';
import { useAuthContext } from '../../context';
import { Avatar } from '../../components';
import { Menu } from '../ui';

export const AccountSettings: FC = () => {
  const { logoutUser } = useAuthContext();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <Menu>
      <Menu.MenuButton>
        <Avatar />
      </Menu.MenuButton>
      <Menu.MenuList className="w-24">
        <Menu.MenuItem>Profile</Menu.MenuItem>
        <Menu.MenuItem onClick={handleLogout}>Logout</Menu.MenuItem>
      </Menu.MenuList>
    </Menu>
  );
};
