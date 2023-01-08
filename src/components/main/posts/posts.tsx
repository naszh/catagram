import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
  PostCounter,
  PostDescription,
  PostComment,
} from './posts.styled';

type currentPostsType = {
  currentPosts: Array<Cat> | null;
};

export const Posts = ({ currentPosts }: currentPostsType): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {currentPosts &&
        currentPosts.map((cat: Cat) => (
          <PostBlock key={uuidv4()} theme={theme}>
            <BlockHeader>
              <BlockHeaderImg src={cat.image_link} loading='lazy' />
              <BlockUser>{cat.name.toLowerCase()}</BlockUser>
            </BlockHeader>
            <BlockImg src={cat.image_link} loading='lazy' />
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
        ))}
    </>
  );
};
