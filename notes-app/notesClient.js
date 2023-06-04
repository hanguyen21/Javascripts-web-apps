class NotesClient {


    loadNotes(callback, callbackError){
       fetch("http://localhost:3000/notes")
       .then (response => response.json())
       .then(data => {
         callback(data);
         
       })
       .catch((error) => {
        callbackError(error);
      });
  
   }


   
    async createNote(data) {
        try {
          const response = await fetch("http://localhost:3000/notes", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({content: data}),
          });
      
          const result = await response.json();
          console.log("Success:", result);
        } catch (error) {
          console.error("Error:", error);
        }
      
      
     
      
      }
      
   }

//     loadNotes(callback){
//        return fetch('http://localhost:3000/notes')
//        .then(response => response.json())
//        .then(data => {
//          callback(data);
//          console.log(data);
//        });
//    }

deleteNote(note) {
    return fetch('http://localhost:3000/notes', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
}

module.exports = NotesClient;