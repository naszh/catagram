import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Navigation, A11y } from 'swiper';
import { Swiper } from 'swiper/react';

import { StoriesOpen } from '../storiesOpen/storiesOpen';
import { RootState } from '../../../redux/store';

import 'swiper/css';
import 'swiper/css/navigation';
import { SlideStyled, StoryImg, StoryUser } from './stories.styled';
import { Cat } from '../../../redux/reducer/catsSlice.types';
import { slisedName } from '../../../helpers';

export const StoriesList = (): JSX.Element => {
  const catsForStories = useSelector((state: RootState) =>
    state.cats.initArr.slice(0, 15)
  );
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);

  return (
    <>
      <Swiper modules={[Navigation, A11y]} slidesPerView={6} navigation>
        {catsForStories.map((story: Cat) => (
          <SlideStyled key={uuidv4()} onClick={() => setModal(true)}>
            <StoryImg src={story.image_link} loading='lazy' />
            <StoryUser>{slisedName(story.name.toLowerCase())}</StoryUser>
          </SlideStyled>
        ))}
      </Swiper>
      <StoriesOpen visible={isModal} onClose={onClose} cats={catsForStories} />
    </>
  );
};
