$(document).ready(function () {

var text;
text = $("#text").html();

setInterval(function () {
  text = text.slice(1, text.length);
   $("#text").html(text);
}, 100);




});
