import { Header } from '../components/header/header';
import { Saved } from '../components/saved/saved';
import { Container } from './pages.styled';

export const SavedPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Saved />
      </Container>
    </>
  );
};
