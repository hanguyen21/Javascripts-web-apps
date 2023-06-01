// notesView.js

class NotesView {
    constructor(model) {
      this.model = model;
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
      console.log(notes)
      // For each note, create and append a new element on the main container
      notes.forEach(note => {
        const noteEl = document.createElement('div');
        noteEl.textContent = note;
        noteEl.className = 'note';
        document.querySelector('#add-note-input').value= '';
        this.mainContainerEl.append(noteEl);
      })
    }
  }
  
  module.exports = NotesView;