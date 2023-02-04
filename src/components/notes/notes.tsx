import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContainerBox, PageTitle, PageWidth } from '../../common/common.styled';
import { ThemeContext } from '../theme/themeProvider';
import { AddNote } from './addNote';
import { Note } from './note';
import { ContainerNotes, NotesList } from './notes.styled';
import { NoteType } from './notes.types';

export const Notes = () => {
  const { theme } = useContext(ThemeContext);

  const [notes, setNotes] = useState<NoteType[]>([
    {
      id: uuidv4(),
      text: 'This is my first note!',
      date: '02/02/2022',
    },
  ]);

  useEffect(() => {
    localStorage.setItem('note', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const savedNotes: NoteType[] = JSON.parse(
      localStorage.getItem('note') || '{}'
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const addNote = (text: string) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note: NoteType) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <PageWidth>
      <PageTitle>Notes</PageTitle>
      <ContainerBox theme={theme}>
        <ContainerNotes>
          <NotesList>
            {notes.map((note: NoteType) => (
              <Note
                key={note.id}
                id={note.id}
                text={note.text}
                date={note.date}
                handleDeleteNote={deleteNote}
              />
            ))}
            <AddNote handleAddNote={addNote} />
          </NotesList>
        </ContainerNotes>
      </ContainerBox>
    </PageWidth>
  );
};
