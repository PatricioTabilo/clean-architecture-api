import { Note } from '../interfaces/note.entity';
import { NoteRepositoryRef } from '../interfaces/note.repo.ref';

/*
 * Se define el caso de uso, aca se debe imnplementar la logica de negocio
 * debido a la inyeccion de dependencias el caso de uso queda aislado del
 * modelo, facilmente se puede testear de manera unitaria usando mocks
 */
export class FindAllNotes {
  constructor(private noteRepository: NoteRepositoryRef) {}

  get(): Note[] {
    return this.noteRepository.getNotes();
  }
}
