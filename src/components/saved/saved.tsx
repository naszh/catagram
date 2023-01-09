import { useContext } from 'react';
import { useSelector } from 'react-redux';
import {
  ContainerBox,
  LinkStyled,
  PageTitle,
  PageWidth,
} from '../../common/common.styled';
import { Cat } from '../../redux/reducer/catsSlice.types';
import { RootState } from '../../redux/store';
import { ThemeContext } from '../theme/themeProvider';
import { PostImg, PostsWrapper, Text } from './saved.styled';

export const Saved = () => {
  const { theme } = useContext(ThemeContext);
  const like = useSelector((state: RootState) => state.cats.counter);

  const likedPosts: Array<Cat> = useSelector((state: RootState) =>
    state.cats.curArr.filter((post: Cat) => post.id && post.isLiked === true)
  );

  return (
    <PageWidth>
      <PageTitle>{like} likes</PageTitle>
      <ContainerBox theme={theme}>
        {likedPosts.length === 0 ? (
          <Text>
            You haven't added any posts to your saved.
            <br />
            <LinkStyled to='/'>Go back to the home page</LinkStyled> and like
            something &#128570;
          </Text>
        ) : (
          <PostsWrapper>
            {likedPosts.map((post: Cat) => (
              <PostImg
                src={post.image_link}
                alt={`photo of ${post.name}`}
                title={post.name}
              />
            ))}
          </PostsWrapper>
        )}
      </ContainerBox>
    </PageWidth>
  );
};
