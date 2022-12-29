import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 25%;
  height: 100%;
  position: fixed;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 15px;
`;

export const HeaderTitle = styled.h1`
  font-family: cursive;
  margin: 10px 0 20px;
  padding: 0 12px;
`;

export const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
