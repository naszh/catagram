import { useContext } from 'react';
import { ThemeContext } from '../theme/themeProvider';
import {
  ContainerPosts,
  ContainerStories,
  MainComponent,
  SectionComponent,
} from './main.styled';
import { PostsPaginate } from './posts/postsPaginate';
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
          <PostsPaginate postsPerPage={3} />
        </ContainerPosts>
      </SectionComponent>
    </MainComponent>
  );
};
