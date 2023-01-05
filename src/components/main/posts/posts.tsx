import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ThemeContext } from '../../theme/themeProvider';
import { PostBlock } from '../main.styled';

export const Posts = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  const catsForPosts = useSelector((state: RootState) => state.posts.initArr);

  return (
    <>
      {catsForPosts.map((cat: string) => (
        <PostBlock theme={theme}>
          <img src={cat} style={{ width: '80%', height: '80%' }} />
        </PostBlock>
      ))}
    </>
  );
};
