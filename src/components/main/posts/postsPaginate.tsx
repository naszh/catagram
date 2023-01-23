import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

import { setOffset } from '../../../redux/reducer/catsSlice';
import { Cat } from '../../../redux/reducer/catsSlice.types';
import { AppDispatch, RootState } from '../../../redux/store';
import { Posts } from './posts';
import { ColorRingStyled } from './posts.styled';

type PostsPerPageType = {
  postsPerPage: number;
};

export const PostsPaginate: FC<PostsPerPageType> = ({
  postsPerPage,
}): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const posts: Array<Cat> | null = useSelector(
    (state: RootState) => state.cats.filteredArr
  );
  const offset: number = useSelector((state: RootState) => state.cats.offset);
  const loading: boolean = useSelector(
    (state: RootState) => state.cats.loading
  );

  const handlePageClick = (): void => {
    dispatch(setOffset(postsPerPage));
  };

  return (
    <>
      {loading ? (
        <ColorRing wrapperStyle={ColorRingStyled} />
      ) : (
        <InfiniteScroll
          dataLength={offset + postsPerPage}
          next={handlePageClick}
          hasMore={offset + postsPerPage < posts!.length}
          scrollThreshold={1}
          loader={<ColorRing />}
          scrollableTarget='scrollableDiv'
        >
          <Posts currentPosts={posts} />
        </InfiniteScroll>
      )}
    </>
  );
};
