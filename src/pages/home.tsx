import { Footer } from '../layouts/footer/footer';
import { Header } from '../layouts/header/header';
import { Main } from '../layouts/main/main';
import { Container } from './pages.styled';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Main />
        <Footer></Footer>
      </Container>
    </>
  );
};
