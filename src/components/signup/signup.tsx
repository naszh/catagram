import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ButtonElement, InputPassword, InputText } from '../../common/common';
import {
  LinkStyled,
  PageTitle,
  SignContainer,
  SignForm,
  SignNavigateBlock,
  SignPage,
} from '../../common/common.styled';
import { signupValidation } from '../helpers';
import { Terms } from './signup.styled';

export const SignUpForm = () => {
  const navigate: NavigateFunction = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);
  const [IsErrorFullName, setIsErrorFullName] = useState<boolean>(false);
  const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleChangeFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };
  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    signupValidation(
      email,
      fullName,
      password,
      setIsErrorEmail,
      setIsErrorFullName,
      setIsErrorPassword,
      setIsValid
    );
  }, [fullName, email, password]);

  return (
    <SignPage>
      <SignContainer>
        <PageTitle>Catagram</PageTitle>
        <SignForm>
          <InputText
            type={'email'}
            label={'Email'}
            onChange={handleChangeEmail}
            error={isErrorEmail}
          />
          <InputText
            type={'text'}
            label={'Full name'}
            onChange={handleChangeFullName}
            error={IsErrorFullName}
          />
          <InputText
            type={'text'}
            label={'Username'}
            onChange={handleChangeUsername}
          />
          {/* The password must contain minimum five characters, at least one letter
          and one number. */}
          <InputPassword
            text={'Password'}
            onChange={handleChangePassword}
            error={isErrorPassword}
          />
          <Terms>By signing up, you agree to our Terms and Policy.</Terms>
          <ButtonElement
            text={'sign up'}
            size={'medium'}
            disabled={!isValid}
            onClick={() => {
              navigate('/signin', { replace: true });
            }}
          />
        </SignForm>
      </SignContainer>
      <SignNavigateBlock>
        Have an account? <LinkStyled to='/signin'>Sign in</LinkStyled>
      </SignNavigateBlock>
    </SignPage>
  );
};
