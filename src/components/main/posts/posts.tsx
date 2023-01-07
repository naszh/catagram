import { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { CommentIcon, LikeIcon } from '../../../common/icon.styled';
import { fetchCats, setCats } from '../../../redux/reducer/catsSlice';
import { Cat } from '../../../redux/reducer/catsSlice.types';
import { AppDispatch, RootState } from '../../../redux/store';
import { ThemeContext } from '../../theme/themeProvider';
import {
  BlockHeader,
  BlockHeaderImg,
  BlockImg,
  PostBlock,
  BlockUser,
  PostIcons,
  PostCounter,
  PostDescription,
  PostComment,
} from './posts.styled';

export const Posts = (): any => {
  const { theme } = useContext(ThemeContext);

  const catsForPosts: Array<Cat> = useSelector(
    (state: RootState) => state.cats.initArr
  );
  const loading: boolean = useSelector(
    (state: RootState) => state.cats.isLoading
  );
  // const dispatch = useDispatch();
  const dispatch = useDispatch<AppDispatch>();

  const [offset, setOffset] = useState<number>(0);

  const nextHandler = () => {
    console.log('ooo');
    setOffset(offset + 20);
    console.log(offset);
  };

  useEffect(() => {
    dispatch(fetchCats(offset));
    console.log(offset);
  }, [offset]);
  // console.log(catsForPosts);

  // const off: any = useSelector((state: RootState) => state.cats.offset);
  // console.log(off);

  return (
    <>
      {loading ? (
        <ColorRing wrapperStyle={{ display: 'block', margin: '0 auto' }} />
      ) : (
        <InfiniteScroll
          dataLength={5}
          next={() => console.log('next')}
          hasMore={false}
          loader={
            <ColorRing wrapperStyle={{ display: 'block', margin: '0 auto' }} />
          }
          endMessage={<p>Ok</p>}
        >
          {catsForPosts.map(
            (cat: Cat, i) => (
              // i < offset ? (
              <PostBlock key={uuidv4()} theme={theme}>
                <BlockHeader>
                  <BlockHeaderImg src={cat.image_link} />
                  <BlockUser>{cat.name.toLowerCase()}</BlockUser>
                </BlockHeader>
                <BlockImg src={cat.image_link} />
                <PostIcons>
                  <LikeIcon />
                  <CommentIcon />
                </PostIcons>
                <PostCounter>counter</PostCounter>
                <BlockUser>
                  {cat.name.toLowerCase()}
                  <PostDescription>origin#{cat.origin}</PostDescription>
                </BlockUser>
                <PostComment>add a comment</PostComment>
              </PostBlock>
            )
            // ) : null
          )}

          {/* <button
        onClick={() => {
          setOffset(offset + 2);
        }}
      >
        Show more....
      </button> */}
        </InfiniteScroll>
      )}
    </>
  );
};
