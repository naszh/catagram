import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Navigation, A11y } from 'swiper';
import { Swiper } from 'swiper/react';

import { StoriesOpen } from '../storiesOpen/storiesOpen';
import { Cat } from '../../../redux/reducer/catsSliceTypes';
import { RootState } from '../../../redux/store';

import 'swiper/css';
import 'swiper/css/navigation';
import {
  SlideStyled,
  StoryContainer,
  StoryImg,
  StoryUser,
} from './stories.styled';

export const StoriesList = (): JSX.Element => {
  const catsForStories = useSelector((state: RootState) => state.cats.initArr);
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);

  return (
    <>
      <Swiper modules={[Navigation, A11y]} slidesPerView={6} navigation>
        {catsForStories.map((story: Cat) => (
          <SlideStyled key={uuidv4()} onClick={() => setModal(true)}>
            <StoryImg src={story.url} />
            <StoryUser>{story.id.slice(0, 3)}</StoryUser>
          </SlideStyled>
        ))}
      </Swiper>
      <StoryContainer>
        <StoriesOpen visible={isModal} onClose={onClose} />
      </StoryContainer>
    </>
  );
};
