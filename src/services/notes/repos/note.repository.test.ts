import { NoteRepository } from './note.repository';
import { NoteModelRef } from '../interfaces/note.model.ref';
import { Note } from '../interfaces/note.entity';

class NoteModelMock implements NoteModelRef {
  findAll(): Note[] {
    throw new Error('Método no implementado');
  }
}

describe('NoteRepository', () => {
  let mockModel: NoteModelRef;

  beforeEach(() => {
    jest.clearAllMocks();
    mockModel = new NoteModelMock();
  });

  test('getNotes should return data', () => {
    const fixture = [{ from: 'John Doe', to: 'Jane Doe', message: 'Foo Bar' }];
    jest.spyOn(mockModel, 'findAll').mockImplementation(() => fixture);

    const repository = new NoteRepository(mockModel);
    const result = repository.getNotes();

    expect(result).toMatchObject(fixture);
  });
});
