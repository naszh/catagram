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
  width: 80%;
`;

export const PageTitle = styled.p`
  margin-top: 0;
  font-size: 1.3rem;
  font-weight: 900;
  font-family: cursive;
  text-align: center;
  text-transform: uppercase;
  text-decoration: overline;
  letter-spacing: 5px;
`;

export const LinkStyled = styled(Link)`
  color: inherit;
`;

export const SignPage = styled.div`
  margin: auto;
  width: 350px;
`;

export const SignContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #ffffff;
  padding: 40px;
`;

export const SignForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 0;
  text-align: center;
  gap: 15px;
`;

export const SignNavigateBlock = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  backgroundcolor: #ffffff;
  text-align: center;
  margin-top: 15px;
  padding: 16px;
`;
