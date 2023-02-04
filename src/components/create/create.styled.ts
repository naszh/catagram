import styled from 'styled-components';

export const Result = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const ImgWrapper = styled.div`
  max-height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
`;

export const Image = styled.img`
  border-radius: 10px;
  object-fit: cover;
  height: 100%;
`;

export const Input = styled.input`
  display: none;
  margin: auto;
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  cursor: pointer;
  margin-bottom: 15px;
`;

export const UploadText = styled.span`
  padding: 7px;
  background-color: #fef68a;
  border-radius: 20px;
  color: initial;
`;
