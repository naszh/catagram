import { useContext } from 'react';
import { ContainerBox } from '../../common/common.styled';
import { ThemeContext } from '../theme/themeProvider';
import { ContainerPosts, MainComponent, SectionComponent } from './main.styled';
import { PostsPaginate } from './posts/postsPaginate';
import { StoriesList } from './stories/stories';

export const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <MainComponent>
      <SectionComponent>
        <ContainerBox theme={theme}>
          <StoriesList />
        </ContainerBox>
        <ContainerPosts className='posts'>
          <PostsPaginate postsPerPage={3} />
        </ContainerPosts>
      </SectionComponent>
    </MainComponent>
  );
};
