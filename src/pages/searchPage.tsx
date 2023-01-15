import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ContainerBox, PageTitle, PageWidth } from '../common/common.styled';
import { Filter } from '../components/filter/filter';
import { Header } from '../components/header/header';
import { ThemeContext } from '../components/theme/themeProvider';
import { Cat } from '../redux/reducer/catsSlice.types';
import { RootState } from '../redux/store';
import { Container } from './pages.styled';

export const SearchPage = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);

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
        <PageWidth>
          <PageTitle>Search of filter cats by breed</PageTitle>
          <ContainerBox theme={theme}>
            <div style={{ height: '80vh' }}>
              <Filter options={catsFilterNames} />
            </div>
          </ContainerBox>
        </PageWidth>
      </Container>
    </>
  );
};
