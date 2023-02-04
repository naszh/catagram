import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  padding: 30px 0;
  gap: 30px;
  @media (max-width: 640px) {
    padding-top: 0;
  }
`;
