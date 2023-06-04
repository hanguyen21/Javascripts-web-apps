const NotesClient = require('./notesClient');


require('jest-fetch-mock').enableFetchMocks()

describe('NotesClient class', () => {
  it('calls fetch and loads data', (done) => {
    
    const notesClient = new NotesClient();

   
    fetch.mockResponseOnce(JSON.stringify({
      note: "test note",
     
    }));

   
    notesClient.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.note).toBe("test note");
     
      done();
    });
  });

  xit('send a post request to the server', (done) => {
    
    const client = new NotesClient();
    const inputNote = 'test note2';
    client.createNote(inputNote)
    
    expect(fetch).toHaveBeenCalledWith(
        'http://localhost:3000/notes', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: inputNote}),
        }
    )
  
    });
 
});