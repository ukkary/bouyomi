var old_text;

function getLastChat() {
 return $('chat-content').last().text();
}


$('.chat-list-content').on('DOMSubtreeModified propertychange', function(e) {
  var text = getLastChat();
  if (ext.length == 0 || old_text == text) {
    return;
  }
 
  var socket = new WebSocket('ws://localhost:50002/');
  socket.onopen = function() {
    socket.send(text);
  }
}
