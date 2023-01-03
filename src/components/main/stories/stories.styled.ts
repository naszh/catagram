import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const StoryImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const SlideStyled = styled(SwiperSlide)`
  padding: 15px;
  text-align: center;
`;
