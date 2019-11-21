$(document).ready(function () {

var text = "";
text = $("#text").html();
text = text.slice(1, text.length)+text.slice(0, 1);
 $("#text").html(text);



});
