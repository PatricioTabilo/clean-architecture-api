import { Note } from '../interfaces/note.entity';
import { NoteRepositoryRef } from '../interfaces/note.repo.ref';
import { FindAllNotes } from './find.all.notes';

class MockNoteRepository implements NoteRepositoryRef {
  getNotes(): Note[] {
    throw new Error('Método no implementado');
  }
}

describe('FindAllnotes', () => {
  let mockNoteRepository: NoteRepositoryRef;

  beforeEach(() => {
    jest.clearAllMocks();
    mockNoteRepository = new MockNoteRepository();
  });

  test('get shuould return data', () => {
    const fixture = [{ from: 'John Doe', to: 'Jane Doe', message: 'Foo Bar' }];

    jest
      .spyOn(mockNoteRepository, 'getNotes')
      .mockImplementationOnce(() => fixture);

    const useCase = new FindAllNotes(mockNoteRepository);
    const result = useCase.get();

    expect(result).toMatchObject(fixture);
  });
});
