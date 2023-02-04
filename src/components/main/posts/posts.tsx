import { FC, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../../redux/store';
import { ThemeContext } from '../../theme/themeProvider';
import { Cat } from '../../../redux/reducers/cats/catsSlice.types';

import { CommentIcon, LikeIcon } from '../../../common/icon.styled';
import {
  BlockHeader,
  BlockHeaderImg,
  BlockImg,
  PostBlock,
  BlockUser,
  PostIcons,
  PostDescription,
  InputSearch,
} from './posts.styled';

import { Paragraph } from '../../../common/common.styled';
import { LinkTo } from '../../filter/filter.styled';
import {
  toggleIsLiked,
  launchCounter,
  searchByName,
} from '../../../redux/reducers/cats/catsSlice';

type CurrentPostsType = {
  currentPosts: Array<Cat> | null;
};

export const Posts: FC<CurrentPostsType> = ({ currentPosts }): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch<AppDispatch>();
  const [searchTerm, setSearchTerm] = useState('');
  const [isClicked, setIsCliked] = useState(false);

  const clickLike = (id: string) => {
    dispatch(toggleIsLiked(id));
    dispatch(launchCounter());
    setIsCliked(bool => !bool);
  };

  const offset: number = useSelector((state: RootState) => state.cats.offset);
  const endOffset: number = offset + 3;

  const changeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <PostBlock key={uuidv4()} theme={theme}>
            <BlockHeader>
              <BlockHeaderImg
                src={cat.image_link}
                alt={`photo of ${cat.name}`}
                loading='lazy'
              />
              <LinkTo to={`/search/${cat.name}`}>
                <BlockUser>{cat.name.toLowerCase()}</BlockUser>
              </LinkTo>
            </BlockHeader>
            <BlockImg
              src={cat.image_link}
              alt={`photo of ${cat.name}`}
              loading='lazy'
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
              <LinkTo to={`/search/${cat.name}`}>
                {cat.name.toLowerCase()}
              </LinkTo>
              <PostDescription>origin#{cat.origin}</PostDescription>
            </BlockUser>
          </PostBlock>
        ))
      ) : (
        <Paragraph>No results found!</Paragraph>
      )}
    </>
  );
};
