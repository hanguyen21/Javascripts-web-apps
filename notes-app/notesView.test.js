/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView'); 
const NotesClient= require('./notesClient'); 

jest.mock('./notesClient');
// jest.mock('./notesModel')
require('jest-fetch-mock').enableFetchMocks()


describe('Notes view', () => {
  let model;
  let client;
  let view;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NotesModel();
    client = new NotesClient();
    view = new NotesView(model, client);
    NotesClient.mockClear();
  });

    it('displays two notes', () => {
      
      model.addNote('A first note');
      model.addNote('Another one');
      
      // 2. Display the notes on the page
      view.displayNotes();
  
      // 3. There should now be 2 div.note on the page
      expect(document.querySelectorAll('div.note').length).toEqual(2);
    });

    it('adds a new note',() => {
            
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
     
      model.addNote('one');
      model.addNote('two');
    
      view.displayNotes();
      view.displayNotes();
      

      // Assert
      expect(document.querySelectorAll('div.note').length).toEqual(2);
  
    });

    // describe('displayNotesFromApi()', () => {
    //   xit('loads data from the API and populates the model with it ', () => {
    //      const notesModelDouble = {
    //       setNotes: () => {
    //         ['test note']
    //       }
    //      }

    //      const mockClient = {
    //       loadNotes : jest.fn(),
    //      }

    //      mockClient.fetch.mockImplementationOnce() = {

    //      }

    //     // fetch('http://localhost:3000/notes')
    //   })
    // })

    xit('displays notes from Api', () => {

      // mock client methods first
      const mockData = ['mock api note'];
      // this replaces loadNotes with a new function that takes a callback
      // and returns a promise that is using the mockData in the
      // callback. So it's very similar to the real loadNotes, but it
      // skips the fetch to make the test deterministic.
      client.loadNotes.mockImplementation((callback) => {
          return Promise.resolve(callback(mockData));
      });
  
        return view.displayNotesFromApi()
            .then(() => {
                const notes = document.querySelectorAll('div.note');
                expect(notes.length).toBe(1);
                expect(notes.item(0).innerText).toBe('mock api note');
            });
  })
  
  });