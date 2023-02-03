import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { ContainerBox } from '../../common/common.styled';
import { Cat } from '../../redux/reducers/cats/catsSlice.types';
import { RootState } from '../../redux/store';
import { ThemeContext } from '../theme/themeProvider';
import { FilterWrapper, LinkList, SelectStyled } from './filter.styled';
import { FilteredItem } from './filteredItem';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Filter = ({ name }: any): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  const catsFilterNames: Array<Cat> = useSelector((state: RootState) =>
    state.cats.initArr.map(arr => ({
      ...arr,
      value: arr.name,
      label: <LinkList to={`/search/${arr.name}`}>{arr.name}</LinkList>,
    }))
  );
  const catInit = catsFilterNames.filter(cat => cat.name === name)[0];
  const [cat, setCat] = useState<Cat>(catInit);

  return (
    <ContainerBox theme={theme}>
      <FilterWrapper>
        <SelectStyled
          placeholder={cat ? cat.name : 'Select cat breed...'}
          onMenuOpen={onMenuOpen}
          onMenuClose={onMenuClose}
          options={catsFilterNames}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => setCat(e)}
        />
        {cat && <FilteredItem cat={cat} />}
      </FilterWrapper>
    </ContainerBox>
  );
};
