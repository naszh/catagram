import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const SlideStyled = styled(SwiperSlide)`
  padding: 15px;
  text-align: center;
`;

export const StoryImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const StoryUser = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

export const StoryContainer = styled.div`
  position: fixed;
  top: 3%;
  z-index: 100;
  display: flex;
  justify-content: center;
  left: 0;
  width: 100vw;
`;
