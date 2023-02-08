import React, { FC, useEffect, useRef, useState } from 'react';
import { useDebounce, useOutsideClick } from '../../hooks';
import { getUsers } from '../../service';

import { User } from './User/User';
import { Input, Loader } from '../ui';

import { User as UserType } from '../../Types';

export const SearchUsers: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [searchValue, setSearchValue] = useState<string>('');
  const [foundUsers, setFoundUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const debounce = useDebounce(searchValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleFocus = () => {
    if (debounce) handleOpen();
  };

  useOutsideClick(ref, handleClose);

  useEffect(() => {
    const searchUsers = async () => {
      setLoading(true);
      handleOpen();
      try {
        const response = await getUsers(debounce);
        setFoundUsers(response.data);
      } finally {
        setLoading(false);
      }
    };

    if (debounce) {
      searchUsers();
    }
  }, [debounce]);

  return (
    <div ref={ref} className="relative w-[350px]">
      <Input
        onFocus={handleFocus}
        value={searchValue}
        onChange={handleChange}
        placeholder="Search Users..."
      />

      {open && debounce && (
        <div className="absolute top-[calc(100%+5px)] left-0 w-full shadow-md rounded-md bg-white">
          <div onClick={handleClose} className="p-4">
            {loading ? (
              <Loader />
            ) : foundUsers.length > 0 ? (
              foundUsers.map(({ _id, name, email, pic }) => (
                <User
                  key={_id}
                  email={email}
                  name={name}
                  userId={_id}
                  onClose={handleClose}
                />
              ))
            ) : (
              <span>No found</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
