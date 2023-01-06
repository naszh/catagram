import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Cat } from '../../../redux/reducer/catsSlice.types';
import { RootState } from '../../../redux/store';
import { ThemeContext } from '../../theme/themeProvider';
import {
  BlockHeader,
  BlockHeaderImg,
  BlockImg,
  PostBlock,
  BlockUser,
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
            <BlockUser>{cat.name}</BlockUser>
          </BlockHeader>
          <BlockImg src={cat.image_link} />
          <div>icons</div>
          <div>counter</div>
          <BlockUser>{cat.origin}</BlockUser>
          <div>add a comment</div>
        </PostBlock>
      ))}
    </>
  );
};
