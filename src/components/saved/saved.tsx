import { useSelector } from 'react-redux';
import { LinkStyled } from '../../common/common.styled';
import { Cat } from '../../redux/reducer/catsSlice.types';
import { RootState } from '../../redux/store';
import {
  LikedPostsContainer,
  LikesCounter,
  PostImg,
  PostsWrapper,
  Text,
} from './saved.styled';

export const Saved = () => {
  const like = useSelector((state: RootState) => state.cats.counter);

  const likedPosts: Array<Cat> = useSelector((state: RootState) =>
    state.cats.curArr.filter((post: Cat) => post.id && post.isLiked === true)
  );

  return (
    <>
      <LikedPostsContainer>
        <LikesCounter>{like} likes</LikesCounter>
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
      </LikedPostsContainer>
    </>
  );
};
