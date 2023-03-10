import styled from 'styled-components';

export const Text = styled.p`
  text-align: center;
`;

export const PostsWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 10px;
`;

export const PostImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const PostImgWrapper = styled.div`
  position: relative;
  &:hover {
    filter: brightness(0.7);
  }
  &:hover:before {
    content: '💔';
    font-size: 44px;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    margin-top: -29px;
    margin-left: -30px;
    cursor: pointer;
  }
`;
