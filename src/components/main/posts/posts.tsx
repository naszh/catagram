import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Cat } from '../../../redux/reducer/postsReducer/postsSlice.types';
import { RootState } from '../../../redux/store';
import { ThemeContext } from '../../theme/themeProvider';
import {
  BlockHeader,
  BlockHeaderImg,
  BlockImg,
  PostBlock,
  BlockUser,
} from './posts.styled';

export const Posts = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  const catsForPosts = useSelector((state: RootState) => state.posts.initArr);
  const responseSrc: Array<string> = Object.values(
    catsForPosts.map(({ ...data }) => `https://cataas.com/cat/${data._id}`)
  );
  console.log(catsForPosts);
  return (
    <>
      {responseSrc.map((cat: string) => (
        <PostBlock theme={theme}>
          <BlockHeader>
            <BlockHeaderImg src={cat} />
            {catsForPosts.map(
              (x: Cat) =>
                x._id === cat.slice(23) && <BlockUser>{x.owner}</BlockUser>
            )}
          </BlockHeader>
          <BlockImg src={cat} />
          <div>icons</div>
          <div>counter</div>
          {catsForPosts.map(
            (x: Cat) =>
              x._id === cat.slice(23) && (
                <BlockUser>
                  {x.owner} {`#${x.tags.join(' #')}`}
                </BlockUser>
              )
          )}
          <div>add a comment</div>
        </PostBlock>
      ))}
    </>
  );
};
