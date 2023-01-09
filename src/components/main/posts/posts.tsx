import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../../redux/store';
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
} from './posts.styled';
import { launchCounter, toggleIsLiked } from '../../../redux/reducer/catsSlice';

type currentPostsType = {
  currentPosts: Array<Cat> | null;
};

export const Posts = ({ currentPosts }: currentPostsType): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch<AppDispatch>();

  const clickLike = (id: string) => {
    dispatch(toggleIsLiked(id));
    dispatch(launchCounter());
  };

  return (
    <>
      {currentPosts &&
        currentPosts.map((cat: Cat) => (
          <PostBlock key={uuidv4()} theme={theme}>
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
            />
            <PostIcons>
              <LikeIcon
                onClick={() => clickLike(cat.id)}
                style={{ fill: cat.isLiked ? 'red' : '' }}
              />
              <CommentIcon />
            </PostIcons>
            <BlockUser>
              {cat.name.toLowerCase()}
              <PostDescription>origin#{cat.origin}</PostDescription>
            </BlockUser>
            <PostComment>add a comment</PostComment>
          </PostBlock>
        ))}
    </>
  );
};
