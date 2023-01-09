import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { Main } from '../components/main/main';
import { Container } from './pages.styled';

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
