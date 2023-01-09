import styled from 'styled-components';

export const LikedPostsContainer = styled.div`
  width: 100%;
`;

export const LikesCounter = styled.div`
  font-size: 1.3rem;
  font-family: cursive;
  text-align: center;
  text-transform: uppercase;
  text-decoration: overline;
  letter-spacing: 5px;
`;

export const Text = styled.p`
  text-align: center;
  color: crimson;
`;

export const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 20px;
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
