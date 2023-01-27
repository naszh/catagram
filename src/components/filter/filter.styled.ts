import styled from 'styled-components';
import Select from 'react-select';
import { Link } from 'react-router-dom';

export const LinkTo = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const LinkList = styled(LinkTo)`
  display: block;
`;

export const SelectStyled = styled(Select)`
  margin: 10px auto;
  height: auto;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 85%;
  margin: 0 15px;
`;

export const ForImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 65%;
  height: 100%;
`;

export const FilteredImage = styled.img`
  border-radius: 10px;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-items: start;
  width: 35%;
`;

export const Text = styled.p`
  margin: 0;
`;
