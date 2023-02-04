import { IconNavigateType } from './data.types';
import {
  CreateIcon,
  // ExploreIcon,
  HomeIcon,
  LogOutIcon,
  NotesIcon,
  MoreIcon,
  SavedIcon,
  ProfileIcon,
  SearchIcon,
  ThemeIcon,
} from '../common/icon.styled';

export const HeaderNavigate: Array<IconNavigateType> = [
  { text: 'Home', icon: <HomeIcon />, link: '/home' },
  { text: 'Search', icon: <SearchIcon />, link: '/search' },
  // { text: 'Explore', icon: <ExploreIcon />, link: '' },
  { text: 'Notes', icon: <NotesIcon />, link: '/notes' },
  { text: 'Saved', icon: <SavedIcon />, link: '/saved' },
  { text: 'Create', icon: <CreateIcon />, link: '/create' },
  { text: 'Profile', icon: <ProfileIcon />, link: '' },
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
