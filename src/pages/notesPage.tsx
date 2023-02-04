import { Header } from '../components/header/header';
import { Notes } from '../components/notes/notes';
import { Container } from './pages.styled';

export const NotesPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Notes />
      </Container>
    </>
  );
};
