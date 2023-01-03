import { useContext } from 'react';
import { ThemeContext } from '../theme/themeProvider';
import {
  Container,
  MainComponent,
  PostBlock,
  SectionComponent,
  StoriesBlock,
} from './main.styled';

export const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <MainComponent>
      <SectionComponent>
        <Container theme={theme}>
          <StoriesBlock></StoriesBlock>
        </Container>
        <Container theme={theme}>
          <PostBlock></PostBlock>
        </Container>
      </SectionComponent>
    </MainComponent>
  );
};
