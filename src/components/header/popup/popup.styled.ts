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
  @media (max-width: 375px) {
    padding: 6px;
  }
`;

export const Item = styled(MenuItem)`
  justify-content: space-between;
  gap: 10px;
`;
