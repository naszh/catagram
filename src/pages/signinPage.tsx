import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { LinkStyled, PageTitle } from '../common/common.styled';
import {
  SignContainer,
  SignNavigateBlock,
  SignPage,
} from '../components/sign/sign.styled';
import { SignInForm } from '../components/sign/signinForm';
import { RootState } from '../redux/store';

export const SignInPage = () => {
  const navigate: NavigateFunction = useNavigate();
  const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

  useEffect(() => {
    isAuth && navigate('/home', { replace: true });
  }, [isAuth]);

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
