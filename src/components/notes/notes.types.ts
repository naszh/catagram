export interface NoteType {
  id: string;
  text: string;
  date: string;
}

export interface NoteProps extends NoteType {
  handleDeleteNote: (arg0: string) => void;
}

export interface AddNoteProp {
  handleAddNote: (arg0: string) => void;
}
