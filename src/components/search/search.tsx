import { useState } from 'react';
import { Cat } from '../../redux/reducer/catsSlice.types';

export const Search = ({ value }: { value: Cat[] }) => {
  const [name, setName] = useState('');
  const [foundCats, setfoundCats] = useState<Cat[]>(value);

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = value.filter((cat: Cat) => {
        return cat.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setfoundCats(results);
    } else {
      setfoundCats([]);
    }
    console.log(keyword);
    setName(keyword);
  };

  return (
    <div className='container'>
      <input
        type='search'
        value={name}
        onChange={filter}
        className='input'
        placeholder='Filter'
      />
      {name && (
        <div className='user-list'>
          {foundCats && foundCats.length > 0 ? (
            foundCats.map(user => (
              <li key={user.id} className='user'>
                <span className='user-id'>{user.origin}</span>
                <span className='user-name'>{user.name}</span>
              </li>
            ))
          ) : (
            <h1>No results found!</h1>
          )}
        </div>
      )}
    </div>
  );
};
