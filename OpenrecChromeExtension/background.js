var old_text;

function getLastChat() {
 var elements = document.getElementsByClassName('chat-content');
 return elements[elements.length -1].textContent;
}


$('.chat-list-content').on('DOMSubtreeModified propertychange', function(e) {
  var text = getLastChat();
  if (text.length == 0 || old_text == text) {
    return;
  }

  old_text = text;
  var socket = new WebSocket('ws://localhost:50002/');
  socket.onopen = function() {
    socket.send(text);
  }
});
