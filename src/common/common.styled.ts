import { Theme } from '@emotion/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerBox = styled.div<{ theme: Theme }>`
  border: 1px solid;
  border-color: ${({ theme }) =>
    theme === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#FFFFFF' : '#000000'};
`;

export const PageWidth = styled.div`
  width: 85%;
`;

export const PageTitle = styled.p`
  margin-top: 0;
  font-size: 1.3rem;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  text-decoration: overline;
  letter-spacing: 5px;
`;

export const LinkStyled = styled(Link)`
  color: inherit;
`;

export const ErrorText = styled.p`
  margin: 30px 0;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 2px;
`;

export const Paragraph = styled.p`
  margin: 0;
  text-align: center;
`;
