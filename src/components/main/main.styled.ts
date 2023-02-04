import styled from 'styled-components';

export const MainComponent = styled.main`
  width: 500px;
  height: min-content;
  @media (max-width: 1024px) {
    width: 410px;
  }
  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const SectionComponent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;
