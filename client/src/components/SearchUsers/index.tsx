import React, { FC, useEffect, useState } from 'react';
import { $api } from '../../config';
import { useDebounce } from '../../hooks';

import { Input } from '../ui';

import { User } from '../../Types';

export const SearchUsers: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [focused, setFocused] = useState<boolean>(false);

  const debounce = useDebounce(searchValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  useEffect(() => {
    const searchUsers = async () => {
      const response = await $api.get(`/user?search=${debounce}`);
      setUsers(response.data);
    };

    if (debounce) {
      searchUsers();
    }
  }, [debounce]);

  return (
    <div className="relative w-[300px]">
      <Input
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={searchValue}
        onChange={handleChange}
        placeholder="Search Users..."
      />
      {focused && debounce && (
        <div className="absolute top-[calc(100%+5px)] left-0 w-full p-5 shadow-md rounded-md bg-white">
          {users.length > 0 ? (
            users.map(({ _id, name }) => (
              <div key={_id} className="border p-4">
                {name}
              </div>
            ))
          ) : (
            <div>Nothing found</div>
          )}
        </div>
      )}
    </div>
  );
};
