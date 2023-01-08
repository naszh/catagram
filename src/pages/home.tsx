import { Container } from '../common/common.styled';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { Main } from '../components/main/main';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container id='scrollableDiv'>
        <Main />
        <Footer></Footer>
      </Container>
    </>
  );
};
