import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

import { setCurr, setOffset } from '../../../redux/reducer/catsSlice';
import { Cat } from '../../../redux/reducer/catsSlice.types';
import { AppDispatch, RootState } from '../../../redux/store';
import { Posts } from './posts';

type postsPerPageType = {
  postsPerPage: number;
};

export const PostsPaginate = ({
  postsPerPage,
}: postsPerPageType): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const posts: Array<Cat> = useSelector(
    (state: RootState) => state.cats.initArr
  );
  const offset: number = useSelector((state: RootState) => state.cats.offset);
  const loading: boolean = useSelector(
    (state: RootState) => state.cats.loading
  );
  const currentPosts: Array<Cat> = useSelector(
    (state: RootState) => state.cats.curArr
  );

  useEffect(() => {
    dispatch(setCurr(postsPerPage));
    // eslint-disable-next-line
  }, [posts, offset]);

  const handlePageClick = (): void => {
    dispatch(setOffset(postsPerPage));
  };

  return (
    <>
      {loading ? (
        <ColorRing wrapperStyle={{ display: 'block', margin: '0 auto' }} />
      ) : (
        <InfiniteScroll
          dataLength={currentPosts.length}
          next={handlePageClick}
          hasMore={currentPosts.length < posts.length}
          scrollThreshold={1}
          loader={
            'load'
            // <ColorRing wrapperStyle={{ display: 'block', margin: '0 auto' }} /> //triggers posts
          }
          endMessage={<p>Ok</p>} //add styles later
          scrollableTarget='scrollableDiv'
        >
          <Posts currentPosts={currentPosts} />
        </InfiniteScroll>
      )}
    </>
  );
};
