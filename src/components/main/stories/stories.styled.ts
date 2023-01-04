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
  cursor: pointer;
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
  right: 40%;
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
