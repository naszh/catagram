import styled from 'styled-components';
import { Theme } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  width: 270px;
  height: 100%;
  border-right: 1px solid;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#FFFFFF' : '#000000'};
  border-color: ${({ theme }) =>
    theme === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};
  @media (max-width: 640px) {
    flex-direction: row;
    width: 100%;
    height: fit-content;
    padding: 10px;
  }
`;

export const HeaderContainer = styled.header`
  padding: 10px 0 35px;
  @media (max-width: 640px) {
    display: none;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  padding: 0 12px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const NavigationList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    display: inline-flex;
  }
`;

export const ListItemContainer = styled.li<{ theme: Theme }>`
  margin-bottom: 5px;
  &:hover {
    background-color: ${({ theme }) =>
      theme === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)'};
    border-radius: 25px;
	},
`;

export const ListItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  text-decoration: none;
  color: inherit;
  @media (max-width: 375px) {
    padding: 6px;
  }
`;

export const ItemText = styled.p`
  margin: 0;
  @media (max-width: 640px) {
    display: none;
  }
`;
