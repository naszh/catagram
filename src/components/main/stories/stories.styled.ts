import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const SlideStyled = styled(SwiperSlide)`
  padding: 15px;
  text-align: center;
  cursor: pointer;
  align-self: center;
`;

export const StoryImg = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  object-fit: cover;
`;

export const StoryUser = styled.p`
  margin: 0;
  font-size: 0.8rem;
  white-space: nowrap;
`;

export const StoryContainer = styled.div`
  position: fixed;
  top: 3%;
  z-index: 100;
  display: flex;
  justify-content: center;
`;

export const ClearLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
  z-index: 70;
`;
