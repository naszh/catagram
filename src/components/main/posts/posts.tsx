import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
              {/* <LazyLoadImage
                alt={`photo of ${cat.name}`}
                effect='blur'
                height={'35px'}
                src={cat.image_link} // use normal <img> attributes as props
                width={'35px'}
              /> */}
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
              // placeholderSrc={cat.image_link}
              // effect='blur'
              // loading='lazy'
            />
            {/* <LazyLoadImage
              alt={`photo of ${cat.name}`}
              placeholderSrc={cat.image_link}
              effect='blur'
              height={'100%'}
              src={cat.image_link}
              width={'100%'}
            /> */}

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
