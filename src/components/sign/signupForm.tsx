import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ButtonElement, InputPassword, InputText } from '../../common/common';
import { signupValidation } from '../../helpers';
import { registration } from '../../redux/reducers/auth/authSlice';
import { SignForm, Terms } from './sign.styled';

export const SignUpForm = () => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();

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
        onClick={e => {
          e.preventDefault();
          navigate('/signin', { replace: true });
          dispatch(registration({ email, password }));
        }}
      />
    </SignForm>
  );
};
