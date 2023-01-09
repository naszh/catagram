import { Container } from '@mui/material';
import { ErrorText, LinkStyled } from '../common/common.styled';
import { Header } from '../components/header/header';

export const ErrorPage = () => {
  return (
    <>
      <Header />
      <Container>
        <ErrorText>
          Sorry, this page isn't available.
          <br />
          The link you followed may be broken, or the page may have been removed
          <br /> <LinkStyled to='/home'>Go back to Catagram</LinkStyled>
        </ErrorText>
      </Container>
    </>
  );
};
