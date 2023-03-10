import { Theme } from '@mui/material';
import styled from 'styled-components';

export const PostBlock = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border: 1px solid;
  border-color: ${({ theme }) =>
    theme === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#FFFFFF' : '#000000'};
`;

export const BlockHeader = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  padding-left: 12px;
`;

export const BlockHeaderImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const BlockUser = styled.p`
  margin: 0;
  font-weight: bolder;
  padding-left: 12px;
`;

export const BlockImg = styled.img`
  width: 100%;
  max-height: 310px;
  object-fit: cover;
`;

export const PostIcons = styled.div`
  padding: 3px 0 0 10px;
`;

export const PostDescription = styled.span`
  font-weight: normal;
  margin-left: 7px;
`;

export const InputSearch = styled.input<{ theme: Theme }>`
  border-color: ${({ theme }) =>
    theme === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};
  border-width: 1px;
  border-radius: 5px;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#FFFFFF' : '#000000'};
  padding: 5px;
  width: 100%;
  margin-bottom: 20px;
  color: inherit;
  &:focus-visible {
    outline-color: ${({ theme }) =>
      theme === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'};
  }
`;

export const ColorRingStyled = { display: 'block', margin: '0 auto' };
