/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView'); 


describe('Notes view', () => {
    it('displays two notes', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
  
      // 1. Setting up model and view
      const model = new NotesModel();
      const view = new NotesView(model);
      model.addNote('A first note');
      model.addNote('Another one');
      
      // 2. Display the notes on the page
      view.displayNotes();
  
      // 3. There should now be 2 div.note on the page
      expect(document.querySelectorAll('div.note').length).toEqual(2);
    });

    it('adds a new note',() => {
      // Arrange
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new NotesModel();
      const view = new NotesView(model);
      
      
      // Act
      const input = document.querySelector('#add-note-input');
      input.value = 'My new amazing test note';


      const button = document.querySelector('#add-note-button');
      button.click();
      // Assert
      expect(document.querySelectorAll('div.note').length).toEqual(1);
      expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new amazing test note');
  
    });
    
    it('clear the list of previous notes before displaying',() => {
      // Arrange
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new NotesModel();
      const view = new NotesView(model);
      
    
      // Act
      
      model.addNote('one');
      model.addNote('two');
    
      view.displayNotes();
      view.displayNotes();
      

      // Assert
      expect(document.querySelectorAll('div.note').length).toEqual(2);
      
  
    });
  });