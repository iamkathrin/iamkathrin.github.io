
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

function goTo1d1() {
window.location.href = "1d1.html"
}
function goTo2d1() {
window.location.href = "2d1.html"
}


$(".home2").click(function(){
  $("#map2").toggle();
});

$(".home").click(function(){
  $("#map").toggle();
});
 // first night
function toTVn1(){
  var tv1=document.getElementById("tvday1");
  tv1.style.display="block";
  tv1.style.zIndex= "5";
  $("#kitchenday1, #brday1, #brday1loop, #bedroom1, #herRoom1").css("display","none");
  $("#map").toggle();
  $("#map2").toggle();
  $("#cctvday1").css({'opacity':'1','transition':'.5s'});
  setTimeout(function() {$("#cctvday1").css({'opacity':'0','transition':'.5s'});},3000);

}

function toEatn1(){
  var eat1 =document.getElementById("kitchenday1");
  eat1.style.display="block";
  eat1.style.zIndex="5";
  $("#tvday1, #brday1, #brday1loop, #bedroom1, #herRoom1").css("display","none");
  $("#map").toggle();
  $("#map2").toggle();
  $("#cckitchenday1").css({'opacity':'1','transition':'.5s'});
  setTimeout(function() {$("#cckitchenday1").css({'opacity':'0','transition':'.5s'});},4000);

}

var clicks =0;
$('.bathroom').click(function(){
   if (clicks==0){
     var br1 =document.getElementById("brday1");
      var br1loop= document.getElementById("brday1loop")
      br1.style.display="block";
      br1.style.zIndex="5";
      br1loop.style.zIndex="5";
      setTimeout(function(){br1loop.style.display="block";},1600);
      setTimeout(function(){br1.style.display="none";},1600);
      $("#kitchenday1, #tvday1, #bedroom1, #herRoom1").css("display","none");
      $("#map").toggle();
      $("#map2").toggle();
      setTimeout(function() {$("#ccbrday1").css({'opacity':'1','transition':'.5s'});},1600);
      setTimeout(function() {$("#ccbrday1").css({'opacity':'0','transition':'.5s'});},4600);

   }else{
      var br1loop= document.getElementById("brday1loop")
      br1loop.style.display="block";
      br1loop.style.zIndex="5";
      $("#kitchenday1, #tvday1, #brday1, #bedroom1, #herRoom1").css("display","none");
      $("#map").toggle();
      $("#map2").toggle();
      $("#ccbrdayone").css({'opacity':'1','transition':'.5s'});
      setTimeout(function() {$("#ccbrdayone").css({'opacity':'0','transition':'.5s'});},3000);
   }
   ++clicks;
});

function toBedn1(){
  $("#bedroom1").css("display","block");
  $("#bedroom1").css("zIndex","5");
  $("#tvday1, #brday1, #brday1loop, #kitchenday1, #herRoom1").css("display","none");
  $("#map").toggle();
  $("#map2").toggle();
  $("#ccbedroomday1").css({'opacity':'1','transition':'.5s'});
  setTimeout(function() {$("#ccbedroomday1").css({'opacity':'0','transition':'.5s'});},3000);
}
function toHern1(){
  $("#herRoom1").css("display","block");
  $("#herRoom1").css("zIndex","5");
  $("#tvday1, #brday1, #brday1loop, #kitchenday1, #bedroom1").css("display","none");
  $("#map").toggle();
  $("#map2").toggle();
  setTimeout(function() {$("#ccherroomday1").css({'opacity':'1','transition':'.5s'});},2000);
  setTimeout(function() {$("#ccherroomday1").css({'opacity':'0','transition':'.5s'});},5000);
}
function noAccess(){
  var lck= document.getElementById("locked");
  lck.style.display="block";
  setTimeout(function() {lck.style.opacity="1"; lck.style.transition =".5s";},0);
  setTimeout(function() {lck.style.opacity="0"; lck.style.transition =".5s";},1500);
  setTimeout(function() { lck.style.display="none";},2000);
}

function onOff(){
$("#switchon").css('display','block');
$(".home").css('display','none');
}

function turnOff(){
  $("#switchon").attr('src','imag/switchoff.png');
  $("#switchon").attr('usemap','none');

}
imageMapResize();
