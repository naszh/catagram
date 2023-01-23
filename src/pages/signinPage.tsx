import { LinkStyled, PageTitle } from '../common/common.styled';
import {
  SignContainer,
  SignNavigateBlock,
  SignPage,
} from '../components/sign/sign.styled';
import { SignInForm } from '../components/sign/signinForm';

export const SignInPage = () => {
  return (
    <SignPage>
      <SignContainer>
        <PageTitle>Catagram</PageTitle>
        <SignInForm />
      </SignContainer>
      <SignNavigateBlock>
        Don&apos;t have an account?{' '}
        <LinkStyled to='/signup'>Sign up</LinkStyled>
      </SignNavigateBlock>
    </SignPage>
  );
};
