function sizeUp() {
  // var elem= document.getElementById("firstclick");
  //   // elem.style.transform = "scale(1.2,1.2)"
  //   elem.style.transition = "all .5s ease-in-out";
    $('#workmap').css({'cursor': 'pointer'});
}

function sizeDown(){
  var elem= document.getElementById("firstclick");
    // elem.style.transform = "scale(1,1)"
    elem.style.transition = "all .5s ease-in-out";
}

$('area').hover(function() {
  $('body').css('cursor','pointer');
}, function(){
  $('body').css('cursor','initial');

})
// coming in door
function playTransition() {
  var elem= document.getElementById("firstclick");
  var e2= document.getElementById("entranceUnder");
  var e3= document.getElementById("entranceGirl");
  var e4= document.getElementById("entranceLoop");
  // elem.style.transform = "scale(1,1)"
  elem.setAttribute("usemap","none");
  elem.src = "gfile/gottatry.gif";
  setTimeout(function() { e2.style.display="block"; },1500);
  setTimeout(function(){e3.style.display="block";},1500);
  setTimeout(function(){e3.style.display="none";},3600);
  setTimeout(function() { e4.style.display="block"; },3600);

}
// zooming in
function playTransition2(){
  var e4= document.getElementById("entranceLoop");
  e4.setAttribute("usemap","none");
  e4.src ="gfile/zoomher.gif";
  var e5= document.getElementById('herClose')
  setTimeout(function () {e5.style.display="block";},2666);

}
