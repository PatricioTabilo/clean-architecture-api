import { Note } from '../interfaces/note.entity';
import { NoteModelRef } from '../interfaces/note.model.ref';

// Capa de datos
export class NoteModel implements NoteModelRef {
  findAll(): Note[] {
    return [
      {
        from: 'Patricio Tabilo',
        to: 'EasyBroker',
        message: 'I want to be part of your team!',
      },
    ];
  }
}
