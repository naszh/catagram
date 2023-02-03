import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Navigation, A11y } from 'swiper';
import { Swiper } from 'swiper/react';

import { StoriesOpen } from '../storiesOpen/storiesOpen';
import { AppDispatch, RootState } from '../../../redux/store';

import 'swiper/css';
import 'swiper/css/navigation';
import { SlideStyled, StoryImg, StoryUser } from './stories.styled';
import { Cat } from '../../../redux/reducers/cats/catsSlice.types';
import { slisedName } from '../../../helpers';
import {
  getStoryImg,
  toggleIsViewed,
} from '../../../redux/reducers/cats/catsSlice';

export const StoriesList = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const catsForStories = useSelector((state: RootState) => state.cats.stories);

  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);

  return (
    <>
      <Swiper modules={[Navigation, A11y]} slidesPerView={6} navigation>
        {catsForStories.map((story: Cat) => (
          <SlideStyled
            key={uuidv4()}
            onClick={() => {
              dispatch(getStoryImg(story.image_link));
              dispatch(toggleIsViewed(story.id));
              setModal(true);
            }}
          >
            <StoryImg
              src={story.image_link}
              loading='lazy'
              style={{
                border: story.isViewed ? 'none' : '3px solid darkseagreen',
              }}
            />
            <StoryUser>{slisedName(story.name.toLowerCase())}</StoryUser>
          </SlideStyled>
        ))}
      </Swiper>
      <StoriesOpen visible={isModal} onClose={onClose} />
    </>
  );
};
