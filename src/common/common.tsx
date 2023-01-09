import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import {
  ButtonElementProps,
  InputPasswordProps,
  InputProps,
} from './common.types';

export const InputText = ({
  type,
  label,
  variant = 'standard',
  required = true,
  onChange,
  error,
}: InputProps) => {
  return (
    <TextField
      type={type}
      label={label}
      variant={variant}
      required={required}
      onChange={onChange}
      error={error}
    />
  );
};

export const InputPassword = ({
  onChange,
  text,
  required = true,
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl variant='standard'>
      <InputLabel required={required}>{text}</InputLabel>
      <Input
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
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
  );
};

export const ButtonElement = ({
  text,
  size,
  onClick,
  disabled,
}: ButtonElementProps) => {
  return (
    <Button
      variant='contained'
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
