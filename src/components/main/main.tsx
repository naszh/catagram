import { useContext } from 'react';
import { ThemeContext } from '../theme/themeProvider';
import {
  Container,
  MainComponent,
  PostBlock,
  SectionComponent,
} from './main.styled';
import { StoriesList } from './stories/stories';

export const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <MainComponent>
      <SectionComponent>
        <Container theme={theme}>
          <StoriesList />
        </Container>
        <Container theme={theme}>
          <PostBlock></PostBlock>
        </Container>
      </SectionComponent>
    </MainComponent>
  );
};
