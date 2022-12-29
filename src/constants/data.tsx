import { IconNavigateType } from './data.types';
import {
  CreateIcon,
  ExploreIcon,
  HomeIcon,
  LogOutIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
  SearchIcon,
  ThemeIcon,
} from './icon.styled';

export const HeaderNavigate: Array<IconNavigateType> = [
  { text: 'Home', icon: <HomeIcon />, link: '' },
  { text: 'Search', icon: <SearchIcon />, link: '' },
  { text: 'Explore', icon: <ExploreIcon />, link: '' },
  { text: 'Messages', icon: <MessagesIcon />, link: '' },
  { text: 'Notifications', icon: <NotificationsIcon />, link: '' },
  { text: 'Create', icon: <CreateIcon />, link: '' },
  { text: 'Profile', icon: <ProfileIcon />, link: '' },
];

export const Popup: IconNavigateType = {
  text: 'More',
  icon: <MoreIcon />,
  link: '',
};

export const PopupList: Array<IconNavigateType> = [
  { text: 'Switch appearance', icon: <ThemeIcon />, link: '' },
  { text: 'Log out', icon: <LogOutIcon />, link: '' },
];
