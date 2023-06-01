class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {

    // console.log('Thanks for clicking me!');
     const message = document.querySelector('#message-input').value;
     console.log(message)
    
    const messageElement = document.createElement('div');
     messageElement.id = 'message';
     messageElement.innerText = message; 
    
     document.querySelector('#message-input').value = '';

     document.querySelector('#main-container').append(messageElement);
  };

  hideMessage() {
    // console.log('Delete message!');
    // const allMessages = document.querySelectorAll('#message');
    // allMessages.forEach((message) => {
    //      message.remove();
     document.querySelector('#message').remove();
  };
};

module.exports = MessageView;