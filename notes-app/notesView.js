// notesView.js

class NotesView {
    constructor(model, client) {
      this.model = model;
      this.client = client;
      this.mainContainerEl = document.querySelector('#main-container');
    
      this.buttonEl = document.querySelector('#add-note-button');

      document.querySelector('#add-note-button').addEventListener('click', () => {
        const newNote = document.querySelector('#add-note-input').value;
        this.addNewNote(newNote);
      });

    };

    addNewNote(newNote) {
      this.model.addNote(newNote);
      
      this.displayNotes();
    }

    displayNotes() {
     //  Remove all previous notes
      document.querySelectorAll('div.note').forEach(e => e.remove());
      
      const notes = this.model.getNotes()
     

      // For each note, create and append a new element on the main container
      notes.forEach(note => {
        const noteEl = document.createElement('div');
        noteEl.textContent = note;
        noteEl.className = 'note';
        document.querySelector('#add-note-input').value= '';
        this.mainContainerEl.append(noteEl);
      })
    }
    
    addNoteToApi(inputNote) {
      this.client.createNote(inputNote);
      this.displayNotesFromApi();
    }

    displayNotesFromApi() {
      return this.client.loadNotes((notes) => {
         this.model.setNotes(notes); 
         this.displayNotes();
         console.log(this.displayNotes())
      }, (callback) => {
          callback(this.displayError())
      });
    }

      displayError() {
        const newNote = document.createElement('div');
        document.querySelector('#add-note-input').value = ''; // clears input from text box
        newNote.className = 'error';
        newNote.textContent = 'Oops, something went wrong!';
        this.mainContainerEl.append(newNote);
    }

    }
  
  
  module.exports = NotesView;