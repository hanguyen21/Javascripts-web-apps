(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.hideButton = document.querySelector("#hide-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideButton.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          console.log("Thanks for clicking me!");
          const messageElement = document.createElement("div");
          messageElement.id = "message";
          messageElement.innerText = "This message displayed by JavaScript.";
          document.querySelector("#main-container").append(messageElement);
        }
        hideMessage() {
          document.querySelector("#message").remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
