// index.js
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesClient = require("./notesClient");

// 1. Setup the model with one note
const model = new NotesModel();
model.addNote('This is an example note');

// Detup the client

const client = new NotesClient();
// 2. Setup the view
const view = new NotesView(model, client);

// 3. Make the view display notes
view.displayNotesFromApi();

client.deleteNote();


// client.loadNotes((notes) => {
//     // This will be executed if notes are loaded correctly from the server
//     model.setNotes(notes);
//     view.displayNotes();
//   }, () => {
//     // This will be executed if there's an error
//     view.displayError();
//   });