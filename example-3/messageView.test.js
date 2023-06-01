/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button',() => {
    // Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    // Act
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    // Assert
    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('hides the message',() => {
    // Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    // Act. show then hide message
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();
    // Assert the message is hiden
    expect(document.querySelector('#message')).toBeNull();
  });

  it('takes the message input and displays on thw web page',() => {
    // Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    // Act
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Some text in there'

    
    buttonEl.click();

   
    // Assert
    
    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('Some text in there')
  });
});