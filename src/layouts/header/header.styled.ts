import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  width: 20%;
  height: 100%;
`;

export const HeaderContainer = styled.header`
  padding: 10px 0 20px;
`;

export const HeaderTitle = styled.h1`
  font-family: cursive;
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
`;

export const ListItemContainer = styled.li`
  padding: 12px;
`;

export const ListItem = styled.a`
  display: flex;
  gap: 10px;
`;

export const ItemIcon = styled.span`
  align-self: center;
`;

export const ItemText = styled.p`
  margin: 0;
`;

export const PopupMore = styled.div`
  padding: 12px;
`;
