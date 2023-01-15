import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ContainerBox } from '../../common/common.styled';
import { Cat } from '../../redux/reducer/catsSlice.types';
import { RootState } from '../../redux/store';
import { Search } from '../search/search';
import { ThemeContext } from '../theme/themeProvider';
import { ContainerPosts, MainComponent, SectionComponent } from './main.styled';
import { PostsPaginate } from './posts/postsPaginate';
import { StoriesList } from './stories/stories';

export const Main = () => {
  const { theme } = useContext(ThemeContext);
  const posts: Array<Cat> = useSelector(
    (state: RootState) => state.cats.initArr
  );

  return (
    <MainComponent>
      <SectionComponent>
        <ContainerBox theme={theme}>
          <StoriesList />
        </ContainerBox>
        <Search value={posts} />
        <ContainerPosts className='posts'>
          <PostsPaginate postsPerPage={3} />
        </ContainerPosts>
      </SectionComponent>
    </MainComponent>
  );
};
