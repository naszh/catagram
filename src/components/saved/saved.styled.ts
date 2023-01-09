import styled from 'styled-components';

export const Text = styled.p`
  text-align: center;
  color: crimson;
`;

export const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px;
`;

export const PostImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: fill;
  cursor: pointer;
  &:hover {
    filter: brightness(0.7);
  }
`;
