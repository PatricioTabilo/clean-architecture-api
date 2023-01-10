import express from 'express';
import { Response } from 'express';
import { NoteModel } from '../services/notes/models/NoteModel';
import { FindAllNotes } from '../services/notes/cases/find.all.notes';
import { NoteRepository } from '../services/notes/repos/note.repository';

// Capa presentacional, el router recibe los request del cliente y arma el caso de uso
export default function noteRouter() {
  // Inyección de dependencia para armar el caso de uso
  const findAllUseCase = new FindAllNotes(new NoteRepository(new NoteModel()));

  const router = express.Router();

  // Implementa la ruta y corre la rutina del caso de uso
  router.get('/', (_, res: Response) => {
    try {
      const notes = findAllUseCase.get();

      res.send(notes);
    } catch (error) {
      res.status(500).send({ message: 'Error al buscar la información' });
    }
  });

  return router;
}
