var prev_chat_id;
$(".js-chartArea").on("DOMSubtreeModified", ".js-chartAreaPc", function(e){
  var $el = $(".js-chartAreaPc").children().last();
  var text = $el.find(".c-chart__list__item__name").text();
  var chat_id = $el.attr("class").match(/chat_id_[0-9]+/)[0];
  if(text.length == 0 || chat_id == prev_chat_id) {
    return;
  }
  prev_chat_id = chat_id;
  var socket = new WebSocket('ws://localhost:50002/');
  socket.onopen = function() {
    socket.send(text);
  }
});
