import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Navigation, A11y } from 'swiper';
import { Swiper } from 'swiper/react';

import { Cat } from '../../../redux/reducer/catsSliceTypes';
import { RootState } from '../../../redux/store';

import 'swiper/css';
import 'swiper/css/navigation';
import { SlideStyled, StoryImg } from './stories.styled';

export const StoriesList = (): JSX.Element => {
  const catsForStories = useSelector((state: RootState) => state.cats.initArr);

  return (
    <Swiper modules={[Navigation, A11y]} slidesPerView={6} navigation>
      {catsForStories.map((story: Cat) => (
        <SlideStyled key={uuidv4()}>
          <StoryImg src={story.url} />
          {story.id.slice(0, 3)}
        </SlideStyled>
      ))}
    </Swiper>
  );
};
