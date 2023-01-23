import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContainerBox,
  LinkStyled,
  PageTitle,
  PageWidth,
} from '../../common/common.styled';
import { launchCounter, toggleIsLiked } from '../../redux/reducer/catsSlice';
import { Cat } from '../../redux/reducer/catsSlice.types';
import { AppDispatch, RootState } from '../../redux/store';
import { ThemeContext } from '../theme/themeProvider';
import { PostImg, PostsWrapper, Text } from './saved.styled';

export const Saved = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch<AppDispatch>();

  const like = useSelector((state: RootState) => state.cats.counter);

  const likedPosts: Array<Cat> = useSelector((state: RootState) =>
    state.cats.initArr.filter((post: Cat) => post.id && post.isLiked === true)
  );

  const HandleClickRemove = (id: string) => {
    dispatch(toggleIsLiked(id));
    dispatch(launchCounter());
  };

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
                key={uuidv4()}
                onClick={() => {
                  HandleClickRemove(post.id);
                }}
              />
            ))}
          </PostsWrapper>
        )}
      </ContainerBox>
    </PageWidth>
  );
};
