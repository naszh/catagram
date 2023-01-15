import { useContext, useState } from 'react';
import { Paragraph } from '../../common/common.styled';
import { Cat } from '../../redux/reducer/catsSlice.types';
import { Posts } from '../main/posts/posts';
import { ThemeContext } from '../theme/themeProvider';
import { InputSearch } from './search.styled';

interface SearchProp {
  value: Cat[];
}

export const Search = ({ value }: SearchProp): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState<string>('');
  const [foundCats, setfoundCats] = useState<Cat[]>(value);

  const searchResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results: Cat[] = value.filter((cat: Cat) => {
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
    <>
      <InputSearch
        type='search'
        value={name}
        onChange={searchResults}
        placeholder='Search for a cat by breed'
        theme={theme}
      />
      {name && (
        <>
          {foundCats && foundCats.length > 0 ? (
            <Posts currentPosts={foundCats} />
          ) : (
            <Paragraph>No results found!</Paragraph>
          )}
        </>
      )}
    </>
  );
};
