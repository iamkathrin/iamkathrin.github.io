function sizeUp() {
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
  var c1= document.getElementById("caption")
  // elem.style.transform = "scale(1,1)"
  elem.setAttribute("usemap","none");
  elem.src = "gfile/gottatry.gif";
  setTimeout(function() { e2.style.display="block"; },1500);
  setTimeout(function(){e3.style.display="block";},1500);
  setTimeout(function(){e3.style.display="none";},3600);
  setTimeout(function() { e4.style.display="block"; },3600);
  setTimeout(function() {c1.style.opacity="1"; c1.style.transition ="1s";}, 3700);

}
// zooming in
function playTransition2(){
  var c1= document.getElementById("caption")
  var e6= document.getElementById('choiceBox');
  e6.style.display="block";
  setTimeout(function() {e6.style.opacity="1"; e6.style.transition = "1.5s";},2000);
  var e4= document.getElementById("entranceLoop");
  e4.setAttribute("usemap","none");
  e4.src ="gfile/zoomher.gif";
  var e5= document.getElementById('herClose');
  setTimeout(function () {e5.style.display="block";},2666);
  setTimeout(function() {c1.style.opacity="0"; c1.style.transition ="1s";},0);
}

function goTo1n1() {
window.location.href = "1n1.html"
}
function goTo2n1() {
window.location.href = "2n1.html"
}


$(".home2").click(function(){
  $("#map2").toggle();
});

$(".home").click(function(){
  $("#map").toggle();
});

function toTVn1(){
  var tv1=document.getElementById("tvday1");
  tv1.style.display="block";
  tv1.style.zIndex= "5";
  $("#map").toggle();
  $("#map2").toggle();

}

function toEatn1(){
  var eat1 =document.getElementById("kitchenday1");
  eat1.style.display="block";
  eat1.style.zIndex="5";
  $("#map").toggle();
  $("#map2").toggle();

}
function toBRn1(){
  var br1 =document.getElementById("brday1");
  var br1loop= document.getElementById("brday1loop")
  br1.style.display="block";
  br1.style.zIndex="5";
  setTimeout(function(){br1loop.style.display="block"; br1loop.style.zIndex="6"},1600);
  $("#map").toggle();
  $("#map2").toggle();
  
}
function toBedn1(){

}
function toHern1(){

}
function noAccess(){

}
imageMapResize();
