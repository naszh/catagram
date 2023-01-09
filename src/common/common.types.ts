import { MouseEventHandler } from 'react';

export interface InputProps {
  type: string;
  label: string;
  id?: string;
  variant?: 'outlined' | 'standard' | 'filled' | undefined;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

export interface InputPasswordProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  text: string;
  required?: boolean;
  error?: boolean;
}

export interface ButtonElementProps {
  text: string;
  size: 'small' | 'medium' | 'large';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
