import { Menu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { Popup, PopupLogOut, PopupSwitch } from '../../../constants/data';
import { ItemText } from '../header.styled';
import { Item, PopupMenu } from './popup.styled';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themeProvider';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/reducers/auth/authSlice';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export const PopupMore = () => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Menu
      menuButton={
        <PopupMenu>
          {Popup.icon}
          <ItemText>{Popup.text}</ItemText>
        </PopupMenu>
      }
    >
      <Item onClick={toggleTheme}>
        {PopupSwitch.text}
        {PopupSwitch.icon}
      </Item>
      <Item
        onClick={async () => {
          await dispatch(logout());
          navigate('/signin', { replace: true });
        }}
      >
        {PopupLogOut.text}
        {PopupLogOut.icon}
      </Item>
    </Menu>
  );
};
