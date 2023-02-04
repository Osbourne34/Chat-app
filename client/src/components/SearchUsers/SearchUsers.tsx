import React, { FC, useEffect, useRef, useState } from 'react';
import { $api } from '../../config';
import { useDebounce, useOutsideClick } from '../../hooks';

import { Input } from '../ui';

import { User as UserType } from '../../Types';
import { User } from '../User/User';
import { Loader } from '../Loader/Loader';

export const SearchUsers: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const debounce = useDebounce(searchValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFocus = () => {
    if (debounce) {
      handleOpen();
    }
  };

  useOutsideClick(ref, handleClose);

  useEffect(() => {
    const searchUsers = async () => {
      setLoading(true);
      handleOpen();
      try {
        const response = await $api.get(`/user?search=${debounce}`);
        setUsers(response.data);
      } finally {
        setLoading(false);
      }
    };

    if (debounce) {
      searchUsers();
    }
  }, [debounce]);

  return (
    <div ref={ref} className="relative w-[300px]">
      <Input
        onFocus={handleFocus}
        value={searchValue}
        onChange={handleChange}
        placeholder="Search Users..."
      />

      {open && debounce && (
        <div className="absolute top-[calc(100%+5px)] left-0 w-full shadow-md rounded-md bg-white">
          {loading ? (
            <Loader />
          ) : users.length > 0 ? (
            users.map(({ _id, name, email, pic }) => (
              <User
                email={email}
                name={name}
                key={_id}
                userId={_id}
                onClose={handleClose}
              />
            ))
          ) : (
            <div onClick={handleClose} className="p-4">
              No found
            </div>
          )}
        </div>
      )}
    </div>
  );
};
