import { Note } from './note.entity';

export interface NoteRepositoryRef {
  getNotes(): Note[];
}
