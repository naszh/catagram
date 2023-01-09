import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ButtonElement, InputPassword, InputText } from '../../common/common';
import { LinkStyled } from '../../common/common.styled';
import { signinValidation } from '../../helpers';
import { SignForm } from './sign.styled';

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
  );
};
