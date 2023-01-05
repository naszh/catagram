import { useContext } from 'react';
import { ThemeContext } from '../theme/themeProvider';
import {
  ContainerPosts,
  ContainerStories,
  MainComponent,
  SectionComponent,
} from './main.styled';
import { Posts } from './posts/posts';
import { StoriesList } from './stories/stories';

export const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <MainComponent>
      <SectionComponent>
        <ContainerStories theme={theme}>
          <StoriesList />
        </ContainerStories>
        <ContainerPosts>
          <Posts />
        </ContainerPosts>
      </SectionComponent>
    </MainComponent>
  );
};
