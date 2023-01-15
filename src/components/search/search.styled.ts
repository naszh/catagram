import { Theme } from 'react-select';
import styled from 'styled-components';

export const InputSearch = styled.input<{ theme: Theme }>`
  border-color: ${({ theme }) =>
    theme === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};
  border-width: 1px;
  border-radius: 5px;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#FFFFFF' : '#000000'};
  padding: 5px;
  color: inherit;
  &:focus-visible {
    outline-color: ${({ theme }) =>
      theme === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'};
  }
`;
