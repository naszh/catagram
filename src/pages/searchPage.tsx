import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { Filter } from '../components/filter/filter';
import { Header } from '../components/header/header';
import { Search } from '../components/search/search';
import { Cat } from '../redux/reducer/catsSlice.types';
import { RootState } from '../redux/store';

export const SearchPage = () => {
  const catsFilterNames: Array<Cat> = useSelector((state: RootState) =>
    state.cats.initArr.map(arr => ({
      ...arr,
      value: arr.name,
      label: arr.name,
    }))
  );

  return (
    <>
      <Header />
      <Container>
        <Filter options={catsFilterNames} />
        <Search value={catsFilterNames} />
      </Container>
    </>
  );
};
