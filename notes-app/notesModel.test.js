const NotesModel = require('./notesModel')
describe('NotesModel', () => {
  it('return a list of notes', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it('can add a new note', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
  });


  it('can add some notes', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('clear all notes', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });


});