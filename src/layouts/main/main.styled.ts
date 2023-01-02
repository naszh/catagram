import { Theme } from '@mui/material';
import styled from 'styled-components';

export const MainComponent = styled.main`
  width: 500px;
`;

export const SectionComponent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Container = styled.div<{ theme: Theme }>`
  border: 1px solid;
  border-color: ${({ theme }) =>
    theme === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#FFFFFF' : '#000000'};
`;

export const StoriesBlock = styled.div`
  padding: 10px;
  height: 90px;
`;

export const PostBlock = styled.div`
  height: 500px;
`;
