import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { LinkStyled, PageTitle } from '../../common/common.styled';

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
  const [showPassword, setShowPassword] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    signinValidation(email, password, setIsErrorEmail, setIsValid);
  }, [email, password]);

  return (
    <div style={{ margin: 'auto', width: '350px' }}>
      <div
        style={{
          border: '1px solid',
          borderColor: 'rgba(0,0,0,0.2)',
          borderRadius: '10px',
          backgroundColor: '#FFFFFF',
          padding: '40px',
        }}
      >
        <PageTitle>Catagram</PageTitle>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '40px 0 0',
            textAlign: 'center',
            gap: '15px',
          }}
        >
          <TextField
            id='standard-basic'
            variant='standard'
            error={isErrorEmail}
            type={'email'}
            label={'Enter email'}
            value={email}
            onChange={handleChangeEmail}
          />

          <FormControl sx={{ m: 0 }} variant='standard'>
            <InputLabel htmlFor='standard-adornment-password'>
              Password
            </InputLabel>
            <Input
              id='standard-adornment-password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handleChangePassword}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button
            size={'large'}
            variant='contained'
            disabled={!isValid}
            onClick={() => {
              navigate('/home', { replace: true });
            }}
          >
            sign in
          </Button>

          <LinkStyled to='/home'>Continue without sign in</LinkStyled>
        </div>
      </div>
      <div
        style={{
          border: '1px solid',
          borderColor: 'rgba(0,0,0,0.2)',
          borderRadius: '10px',
          backgroundColor: '#FFFFFF',
          textAlign: 'center',
          marginTop: '15px',
        }}
      >
        <p>
          Don't have an account? <LinkStyled to='/signup'>Sign up</LinkStyled>
        </p>
      </div>
    </div>
  );
};
