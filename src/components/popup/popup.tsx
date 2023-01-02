import { Menu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { Popup, PopupLogOut, PopupSwitch } from '../../constants/data';
import { ItemIcon, ItemText } from '../../layouts/header/header.styled';
import { Item, PopupMenu } from './popup.styled';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themeProvider';

export const PopupMore = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Menu
      menuButton={
        <PopupMenu>
          <ItemIcon>{Popup.icon}</ItemIcon>
          <ItemText>{Popup.text}</ItemText>
        </PopupMenu>
      }
    >
      <Item onClick={toggleTheme}>
        {PopupSwitch.text}
        {PopupSwitch.icon}
      </Item>
      <Item>
        {PopupLogOut.text}
        {PopupLogOut.icon}
      </Item>
    </Menu>
  );
};
