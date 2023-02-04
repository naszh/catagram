import styled from 'styled-components';

export const ContainerNotes = styled.div`
  height: 80vh;
  padding: 15px;
  overflow: auto;
`;

export const NotesList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const NoteItem = styled.div`
  background-color: #fef68a;
  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
`;

export const NoteFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewNoteItem = styled(NoteItem)`
  background-color: #67d7cc;
`;

export const Text = styled.span`
  color: initial;
`;

export const TextArea = styled.textarea`
  border: none;
  resize: none;
  background-color: #67d7cc;
  &:focus {
    outline: none;
  }
`;
