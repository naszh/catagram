import { Imgs } from '../components/create/create';
import { Header } from '../components/header/header';
import { Container } from './pages.styled';

export const CreatePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Imgs />
      </Container>
    </>
  );
};
