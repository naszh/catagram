import styled from 'styled-components';
import { RiCloseCircleFill } from 'react-icons/ri';

export const StoryImage = styled.img`
  inline-size: -webkit-fill-available;
`;

export const CloseStories = styled(RiCloseCircleFill)`
  cursor: pointer;
  font-size: 1.5rem;
  position: relative;
  z-index: 1010;
  top: 17px;
  right: 30px;
  color: darkseagreen;
`;

export const StoryStyles = { borderRadius: 8, overflow: 'hidden' };
