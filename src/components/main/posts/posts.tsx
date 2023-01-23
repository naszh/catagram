import { FC, useContext, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

import { AppDispatch, RootState } from '../../../redux/store';
import { ThemeContext } from '../../theme/themeProvider';
import { Cat } from '../../../redux/reducer/catsSlice.types';

import { CommentIcon, LikeIcon } from '../../../common/icon.styled';
import {
  BlockHeader,
  BlockHeaderImg,
  BlockImg,
  PostBlock,
  BlockUser,
  PostIcons,
  PostDescription,
  PostComment,
  InputSearch,
} from './posts.styled';
import {
  launchCounter,
  searchByName,
  toggleIsLiked,
} from '../../../redux/reducer/catsSlice';
import { Paragraph } from '../../../common/common.styled';

type CurrentPostsType = {
  currentPosts: Array<Cat> | null;
};

export const Posts: FC<CurrentPostsType> = ({ currentPosts }): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch<AppDispatch>();
  const [isClicked, setIsCliked] = useState(false);

  const clickLike = (id: string) => {
    dispatch(toggleIsLiked(id));
    dispatch(launchCounter());
    setIsCliked(bool => !bool);
  };
  const offset: number = useSelector((state: RootState) => state.cats.offset);
  const endOffset: number = offset + 3;

  const [searchTerm, setSearchTerm] = useState('');

  const changeSearchTerm = (e: any) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(searchByName(searchTerm));
  }, [searchTerm, dispatch, isClicked]);

  return (
    <>
      <InputSearch
        type='search'
        value={searchTerm}
        placeholder='Search for a cat by breed'
        onChange={changeSearchTerm}
        theme={theme}
      />
      {currentPosts && currentPosts.length > 0 ? (
        currentPosts.slice(0, endOffset).map((cat: Cat) => (
          <PostBlock key={uuidv4()} theme={theme} className='one'>
            <BlockHeader>
              <BlockHeaderImg
                src={cat.image_link}
                alt={`photo of ${cat.name}`}
                loading='lazy'
              />
              <BlockUser>{cat.name.toLowerCase()}</BlockUser>
            </BlockHeader>
            <BlockImg
              src={cat.image_link}
              alt={`photo of ${cat.name}`}
              loading='lazy'
              // placeholderSrc={cat.image_link}
              // effect='blur'
            />
            <PostIcons>
              <LikeIcon
                onClick={() => clickLike(cat.id)}
                style={{
                  fill: cat.isLiked ? 'red' : '',
                }}
              />
              <CommentIcon />
            </PostIcons>
            <BlockUser>
              {cat.name.toLowerCase()}
              <PostDescription>origin#{cat.origin}</PostDescription>
            </BlockUser>
            <PostComment>add a comment</PostComment>
          </PostBlock>
        ))
      ) : (
        <Paragraph>No results found!</Paragraph>
      )}
    </>
  );
};
