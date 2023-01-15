import { useState } from 'react';
import { Cat } from '../../redux/reducer/catsSlice.types';
import { Posts } from '../main/posts/posts';

interface SearchProp {
  value: Cat[];
}

export const Search = ({ value }: SearchProp): JSX.Element => {
  const [name, setName] = useState('');
  const [foundCats, setfoundCats] = useState<Cat[]>(value);

  const searchResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = value.filter((cat: Cat) => {
        return cat.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      document.querySelector('.posts')!.setAttribute('id', 'empty');
      setfoundCats(results);
    } else {
      document.querySelector('#empty')?.removeAttribute('id');
      setfoundCats([]);
    }
    setName(keyword);
  };

  return (
    <div>
      <input
        type='search'
        value={name}
        onChange={searchResults}
        placeholder='Search'
      />
      {name && (
        <div>
          {foundCats && foundCats.length > 0 ? (
            <Posts currentPosts={foundCats} />
          ) : (
            <p>No results found!</p>
          )}
        </div>
      )}
    </div>
  );
};
