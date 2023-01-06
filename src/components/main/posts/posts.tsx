import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CommentIcon, LikeIcon } from '../../../common/icon.styled';
import { Cat } from '../../../redux/reducer/catsSlice.types';
import { RootState } from '../../../redux/store';
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
  console.log(catsForPosts);

  return (
    <>
      {catsForPosts.map((cat: Cat) => (
        <PostBlock theme={theme}>
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
      ))}
    </>
  );
};
