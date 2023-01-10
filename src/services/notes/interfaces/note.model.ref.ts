import { Note } from './note.entity';

export interface NoteModelRef {
  findAll(): Note[];
}
