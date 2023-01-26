import { PageTitle, PageWidth } from '../common/common.styled';
import { Filter } from '../components/filter/filter';
import { Header } from '../components/header/header';
import { Container } from './pages.styled';

export const SearchPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <PageWidth>
          <PageTitle>Get detailed information on the breed</PageTitle>
          <Filter />
        </PageWidth>
      </Container>
    </>
  );
};
