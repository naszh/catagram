import { MenuItem } from '@szhsin/react-menu';
import styled from 'styled-components';

export const PopupMenu = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const Item = styled(MenuItem)`
  justify-content: space-between;
  gap: 10px;
`;
