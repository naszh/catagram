import { DeleteIcon } from '../../common/icon.styled';
import { NoteFooter, NoteItem, Text } from './notes.styled';
import { NoteProps } from './notes.types';

export const Note = ({ id, text, date, handleDeleteNote }: NoteProps) => {
  return (
    <NoteItem>
      <Text>{text}</Text>
      <NoteFooter>
        <Text>{date}</Text>
        <DeleteIcon onClick={() => handleDeleteNote(id)}>delete</DeleteIcon>
      </NoteFooter>
    </NoteItem>
  );
};
