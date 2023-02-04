import { ChangeEvent, useState } from 'react';
import { NotesSaveIcon } from '../../common/icon.styled';
import { NewNoteItem, NoteFooter, TextArea, Text } from './notes.styled';
import { AddNoteProp } from './notes.types';

export const AddNote = ({ handleAddNote }: AddNoteProp) => {
  const [noteText, setNoteText] = useState<string>('');
  const characterLimit = 200;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <NewNoteItem>
      <TextArea
        rows={8}
        cols={10}
        placeholder='Type to add a note...'
        value={noteText}
        onChange={handleChange}
      ></TextArea>
      <NoteFooter>
        <Text>{characterLimit - noteText.length} remaining</Text>
        <NotesSaveIcon onClick={handleSaveClick} />
      </NoteFooter>
    </NewNoteItem>
  );
};
