import { Note } from '../interfaces/note.entity';
import { NoteModel } from '../models/NoteModel';
import { NoteRepositoryRef } from '../interfaces/note.repo.ref';

/*
 * El repositorio es un adaptador, ya que sabe como se comporta el ORM, en este
 * caso es simple ya que no tenemos una conexion directa con una BD o un servicio
 * externo pero el repo es el encargado de obtener esa información y adapartarla
 * para que nuestro servicio lo entienda
 */
export class NoteRepository implements NoteRepositoryRef {
  constructor(private noteModel: NoteModel) {}

  getNotes(): Note[] {
    return this.noteModel.findAll();
  }
}
