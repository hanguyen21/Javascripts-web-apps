class NotesModel {
  
    constructor(){
        this.notes = [];
    }

    getNotes(){
      return this.notes;
    }

    addNote(note) {
        this.notes.push(note)
    }

    reset() {
        this.notes = []
    }

    setNotes(notes) {
        this.note = notes
    }

}

module.exports = NotesModel; 