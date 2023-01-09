import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { LinkStyled, PageTitle } from '../../common/common.styled';
import { ButtonElement, InputPassword, InputText } from '../../common/common';
import {
  SignForm,
  SigninContainer,
  SigninPage,
  SigninToUp,
} from './signin.styled';

const signinValidation = (
  email: string,
  password: string,
  setIsErrorEmail: any,
  setIsValid: any
): void => {
  const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

  if (email) {
    emailValid ? setIsErrorEmail(false) : setIsErrorEmail(true);
  }

  emailValid && password.length > 3 ? setIsValid(true) : setIsValid(false);
};

export const SignInForm = () => {
  const navigate: NavigateFunction = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    signinValidation(email, password, setIsErrorEmail, setIsValid);
  }, [email, password]);

  return (
    <SigninPage>
      <SigninContainer>
        <PageTitle>Catagram</PageTitle>
        <SignForm>
          <InputText
            type={'email'}
            label={'Email'}
            onChange={handleChangeEmail}
            error={isErrorEmail}
          />
          <InputPassword text={'Password'} onChange={handleChangePassword} />
          <ButtonElement
            text={'sign in'}
            size={'medium'}
            disabled={!isValid}
            onClick={() => {
              navigate('/home', { replace: false });
            }}
          />
          <LinkStyled to='/home'>Continue without sign in</LinkStyled>
        </SignForm>
      </SigninContainer>
      <SigninToUp>
        Don't have an account? <LinkStyled to='/signup'>Sign up</LinkStyled>
      </SigninToUp>
    </SigninPage>
  );
};
