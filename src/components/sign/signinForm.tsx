import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ButtonElement, InputPassword, InputText } from '../../common/common';
import { LinkStyled } from '../../common/common.styled';
import { signinValidation } from '../../helpers';
import { login } from '../../redux/reducers/auth/authSlice';
import { RootState } from '../../redux/store';
import { SignForm } from './sign.styled';

export const SignInForm = () => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();

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

  const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

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
        onClick={e => {
          e.preventDefault();
          dispatch(login({ email, password }));
          {
            isAuth && navigate('/home', { replace: false });
          }
        }}
      />
      <LinkStyled to='/home'>Continue without sign in</LinkStyled>
    </SignForm>
  );
};
