import { Header } from '../components/header/header';
import { Messages } from '../components/messages/messages';
import { Container } from './pages.styled';

export const MsgsPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Messages />
      </Container>
    </>
  );
};
