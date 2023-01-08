import { useSelector } from 'react-redux';
import { Container } from '../../common/common.styled';
import { Cat } from '../../redux/reducer/catsSlice.types';
import { RootState } from '../../redux/store';
import { Header } from '../header/header';

export const Saved = () => {
  const like = useSelector((state: RootState) => state.cats.counter);

  const likedPosts: Array<Cat> = useSelector((state: RootState) =>
    state.cats.curArr.filter((post: Cat) => post.id && post.isLiked === true)
  );

  return (
    <>
      <Header />
      <Container>
        <div>
          {like} likes
          {likedPosts.length === 0 ? (
            <p>You haven't added any posts to your saved</p>
          ) : (
            <div>
              {likedPosts.map((post: Cat) => (
                <div>{post.name}</div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
