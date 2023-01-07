import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCats } from '../../../redux/reducer/catsSlice';
import { Cat } from '../../../redux/reducer/catsSlice.types';
import { AppDispatch, RootState } from '../../../redux/store';
import { Posts } from './posts';

type postsPerPageType = {
  postsPerPage: number;
};

export const PostsPaginate = ({
  postsPerPage,
}: postsPerPageType): JSX.Element => {
  const posts: Array<Cat> = useSelector(
    (state: RootState) => state.cats.initArr
  );
  const loading: boolean = useSelector(
    (state: RootState) => state.cats.isLoading
  );
  const [currentPosts, setCurrentPosts] = useState<Cat[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  useEffect(() => {
    const endOffset: number = offset + postsPerPage;
    setCurrentPosts([...currentPosts, ...posts.slice(offset, endOffset)]);
  }, [posts, offset]);

  const handlePageClick = (): void => {
    setOffset(offset + postsPerPage);
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
            <ColorRing wrapperStyle={{ display: 'block', margin: '0 auto' }} />
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
