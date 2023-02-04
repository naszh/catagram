import styled from 'styled-components';
import {
  HiDotsVertical,
  HiHeart,
  HiHome,
  HiOutlineLogout,
  HiPhotograph,
  HiPlusCircle,
  HiSearchCircle,
  HiUserCircle,
} from 'react-icons/hi';
import { GiMoon } from 'react-icons/gi';
import { TiHeartOutline, TiDelete } from 'react-icons/ti';
import { MdOutlineModeComment, MdNoteAlt } from 'react-icons/md';
import { BiSave } from 'react-icons/bi';

export const HomeIcon = styled(HiHome)`
  font-size: 1.6rem;
`;
export const SearchIcon = styled(HiSearchCircle)`
  font-size: 1.6rem;
`;
export const ExploreIcon = styled(HiPhotograph)`
  font-size: 1.6rem;
`;
export const NotesIcon = styled(MdNoteAlt)`
  font-size: 1.6rem;
`;
export const DeleteIcon = styled(TiDelete)`
  font-size: 1.6rem;
  cursor: pointer;
  color: initial;
`;
export const NotesSaveIcon = styled(BiSave)`
  font-size: 1.6rem;
  cursor: pointer;
  color: initial;
`;
export const SavedIcon = styled(HiHeart)`
  font-size: 1.6rem;
`;
export const CreateIcon = styled(HiPlusCircle)`
  font-size: 1.6rem;
`;
export const ProfileIcon = styled(HiUserCircle)`
  font-size: 1.6rem;
`;
export const MoreIcon = styled(HiDotsVertical)`
  font-size: 1.5rem;
`;
export const ThemeIcon = styled(GiMoon)`
  font-size: 1.5rem;
`;
export const LogOutIcon = styled(HiOutlineLogout)`
  font-size: 1.5rem;
`;

export const LikeIcon = styled(TiHeartOutline)`
  font-size: 2rem;
  cursor: pointer;
`;
export const CommentIcon = styled(MdOutlineModeComment)`
  font-size: 1.8rem;
  margin-left: 10px;
  cursor: pointer;
`;
