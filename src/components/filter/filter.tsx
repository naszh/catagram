import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { ContainerBox } from '../../common/common.styled';
import { Cat } from '../../redux/reducer/catsSlice.types';
import { RootState } from '../../redux/store';
import { ThemeContext } from '../theme/themeProvider';
import { FilterWrapper, SelectStyled } from './filter.styled';
import { FilteredItem } from './filteredItem';

export const Filter = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  const [cat, setCat] = useState<Cat | null>(null);

  const catsFilterNames: Array<Cat> = useSelector((state: RootState) =>
    state.cats.initArr.map(arr => ({
      ...arr,
      value: arr.name,
      label: arr.name,
    }))
  );

  return (
    <ContainerBox theme={theme}>
      <FilterWrapper>
        <SelectStyled
          placeholder='Select cat breed...'
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
