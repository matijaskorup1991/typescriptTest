import React, { useState, useRef, useEffect } from 'react';

const users = [
  {
    name: 'Matija',
    age: 20,
  },
  {
    name: 'Monika',
    age: 20,
  },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find user</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default UserSearch;
