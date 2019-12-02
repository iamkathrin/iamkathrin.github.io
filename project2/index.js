
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
 // first day
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



// first night

function toccTV() {
  $("#cctvnight1").css({'opacity':'1','transition':'.5s'});
  setTimeout(function() {$("#cctvnight1").css({'opacity':'0','transition':'.5s'});},3000);
  $("#map").toggle();
  }
function toccEat() {
  $("#cceatnight1").css({'opacity':'1','transition':'.5s'});
  setTimeout(function() {$("#cceatnight1").css({'opacity':'0','transition':'.5s'});},3000);
  $("#map").toggle();
  }

function toccBR(){
  $("#ccbrnight1").css({'opacity':'1','transition':'.5s'});
  setTimeout(function() {$("#ccbrnight1").css({'opacity':'0','transition':'.5s'});},3000);
  $("#map").toggle();
  }

function toBedLoop(){
  $('#dontknowloop').css('display','block');
  $('#dontknow').css('display','none');
  $("#map").toggle();
  $("#cctobed").css({'opacity':'1','transition':'.5s'});
  setTimeout(function() {$("#cctobed").css({'opacity':'0','transition':'.5s'});},3000);

  var idleTime = 0;
  $(document).ready(function () {
      //Increment the idle time counter every minute.
      var idleInterval = setInterval(timerIncrement, 1000); // 1 minute

      //Zero the idle timer on mouse movement.
      $(this).mousemove(function (e) {
          idleTime = 0;
      });
      $(this).keypress(function (e) {
          idleTime = 0;
      });
  });

  function timerIncrement() {
      idleTime = idleTime + 1;
      if (idleTime > 7) { // 20 minutes
        $("#goDark").css({'display':'block',})
          setTimeout(function() {$("#goDark").css({'opacity':'1','transition':'1s'});},10);
         setTimeout(function() {
           window.location.href ="1d2.html";
         },1500)
      }}};

  var clicks =0;
  $('.dontKnow').click(function(){
     if (clicks==0){
       $('#dontknow').css('display','block');
       setTimeout(function(){$('#dontknow').css('display','none');},4500);
       setTimeout(function(){$('#dontknowloop').css('display','block');},4500);
       $("#map").toggle();
        setTimeout(function() {$("#ccdontknow").css({'opacity':'1','transition':'.5s'});},1600);
        setTimeout(function() {$("#ccdontknow").css({'opacity':'0','transition':'.5s'});},4600);

     }else{
       $('#dontknowloop').css('display','block');
       $('#dontknow').css('display','none');
       $("#map").toggle();
       setTimeout(function() {$("#ccdontknow2").css({'opacity':'1','transition':'.5s'});},100);
       setTimeout(function() {$("#ccdontknow2").css({'opacity':'0','transition':'.5s'});},3000);

     }
     ++clicks;
  });

// second day

var clicks =0;
  $('.gbbshow').click(function(){
     if (clicks==0){
       $('#tvday2loop').css({'display':'block', 'zIndex':'5'});
       setTimeout(function(){$('#tvday2').css({'display':'block', 'zIndex':'6'});},1000);
       setTimeout(function(){$('#tvday2').css('display','none');},1980);
       $("#bedroom2, #brday2, #brday2loop, #kitchendday2, #herRoom2,#trunk").css("display","none");


       $("#map").toggle();
        setTimeout(function() {$("#cctvday2").css({'opacity':'1','transition':'.5s'});},600);
        setTimeout(function() {$("#cctvday2").css({'opacity':'0','transition':'.5s'});},3600);

     }else{
       $('#tvday2loop').css({'display':'block', 'zIndex':'5'});
       $("#bedroom2, #brday2, #brday2loop, #trunk,#kitchendday2, #herRoom2").css("display","none");
       $("#map").toggle();
       setTimeout(function() {$("#cctvdaytwo").css({'opacity':'1','transition':'.5s'});},600);
       setTimeout(function() {$("#cctvdaytwo").css({'opacity':'0','transition':'.5s'});},4000);

     }
     ++clicks;
  });
  function toEatd2(){
    $("#kitchendday2").css("display","block");
    $("#kitchendday2").css("zIndex","5");
    $("#tvday2,#tvday2loop, #brday2, #brday2loop, #bedroom2, #herRoom2,#trunk").css("display","none");
    $("#map").toggle();
    $("#map2").toggle();
    setTimeout(function() {$("#cckitchend2").css({'opacity':'1','transition':'.5s'});},1000);
    setTimeout(function() {$("#cckitchend2").css({'opacity':'0','transition':'.5s'});},3000);
  }

  var clickz=0
   function toBR2(){
      if (clickz==0){
        $('#brday2').css('display','block');
        $("#brday2").css("zIndex","5");
        $("#brday2loop").css("zIndex","5");
        setTimeout(function(){$('#brday2').css('display','none');},1000);
        setTimeout(function(){$('#brday2loop').css('display','block');},1000);
        $("#tvday2,#tvday2loop,#bedroom2, #kitchendday2, #herRoom2,#trunk").css("display","none");
        $("#map").toggle();
         setTimeout(function() {$("#ccbrday2").css({'opacity':'1','transition':'.5s'});},1000);
         setTimeout(function() {$("#ccbrday2").css({'opacity':'0','transition':'.5s'});},3000);

      }else{
        $('#brday2loop').css('display','block');
        $("#brday2loop").css("zIndex","5");
        $("#tvday2,#tvday2loop,#bedroom2, #kitchendday2, #herRoom2,#trunk").css("display","none");
        $("#map").toggle();
              }
      ++clickz;
   };

  function toBedd2(){
    $("#bedroom2").css("display","block");
    $("#bedroom2").css("zIndex","5");
    $("#tvday2,#tvday2loop, #brday2, #brday2loop, #kitchendday2, #herRoom2,#trunk").css("display","none");
    $("#map").toggle();
    $("#map2").toggle();
    $("#ccbedroomday2").css({'opacity':'1','transition':'.5s'});
    setTimeout(function() {$("#ccbedroomday2").css({'opacity':'0','transition':'.5s'});},3000);
  }

  function toHerd2(){
    $("#herRoom2").css("display","block");
    $("#herRoom2").css("zIndex","5");
    $("#tvday2,#tvday2loop, #brday2, #brday2loop, #kitchendday2, #bedroom2,#trunk").css("display","none");
    $("#map").toggle();
    $("#map2").toggle();
    setTimeout(function() {$("#ccherroomday2").css({'opacity':'1','transition':'.5s'});},200);
    setTimeout(function() {$("#ccherroomday2").css({'opacity':'0','transition':'.5s'});},2000);
  }

      function cat(){
        $('#cat').css('display','block');
        setTimeout(function() {$("#cat").css({'opacity':'1','transition':'.5s'});},100);
        setTimeout(function() {$("#cat").css({'opacity':'0','transition':'.5s'});},1200);
        setTimeout(function() {$("#cat").css('display','none');},1500);
  };

  function zoomFlowers(){
    $('#trunk').css('display','block');
    $('#caption5').css('display','block');
    setTimeout(function() {$("#caption5").css({'opacity':'1','transition':'.5s'});},100);
    var f6= document.getElementById('choiceBox2');
    f6.style.display="block";
    setTimeout(function() {f6.style.opacity="1"; f6.style.transition = "1.5s";},2000);

  }












// imageMapResize();
