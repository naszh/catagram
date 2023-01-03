import { MenuItem } from '@szhsin/react-menu';
import styled from 'styled-components';
import { ListItem } from '../header.styled';

export const PopupMenu = styled(ListItem)`
  cursor: pointer;
`;

export const Item = styled(MenuItem)`
  justify-content: space-between;
  gap: 10px;
`;
