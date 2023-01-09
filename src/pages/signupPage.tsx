import { LinkStyled, PageTitle } from '../common/common.styled';
import {
  SignContainer,
  SignNavigateBlock,
  SignPage,
} from '../components/sign/sign.styled';
import { SignUpForm } from '../components/sign/signupForm';

export const SignUpPage = () => {
  return (
    <SignPage>
      <SignContainer>
        <PageTitle>Catagram</PageTitle>
        <SignUpForm />
      </SignContainer>
      <SignNavigateBlock>
        Have an account? <LinkStyled to='/signin'>Sign in</LinkStyled>
      </SignNavigateBlock>
    </SignPage>
  );
};
