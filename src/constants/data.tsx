import { IconNavigateType } from './data.types';
import {
  HomeIcon,
  LogOutIcon,
  NotesIcon,
  MoreIcon,
  SavedIcon,
  SearchIcon,
  ThemeIcon,
} from '../common/icon.styled';

export const HeaderNavigate: Array<IconNavigateType> = [
  { text: 'Home', icon: <HomeIcon />, link: '/home' },
  { text: 'Search', icon: <SearchIcon />, link: '/search' },
  { text: 'Notes', icon: <NotesIcon />, link: '/notes' },
  { text: 'Saved', icon: <SavedIcon />, link: '/saved' },
];

export const Popup: IconNavigateType = {
  text: 'More',
  icon: <MoreIcon />,
  link: '',
};

export const PopupSwitch: IconNavigateType = {
  text: 'Switch appearance',
  icon: <ThemeIcon />,
  link: '',
};

export const PopupLogOut: IconNavigateType = {
  text: 'Log out',
  icon: <LogOutIcon />,
  link: '',
};
