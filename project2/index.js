
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
  var audio = document.getElementById("doorbell");
       audio.play();
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
function showBook(){
  $('#page').toggle();
}

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
      if (idleTime > 7) {
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
       $("#map2").toggle();
        setTimeout(function() {$("#ccdontknow").css({'opacity':'1','transition':'.5s'});},1600);
        setTimeout(function() {$("#ccdontknow").css({'opacity':'0','transition':'.5s'});},4600);

     }else{
       $('#dontknowloop').css('display','block');
       $('#dontknow').css('display','none');
       $("#map").toggle();
       $("#map2").toggle();
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
       $("#bedroom2, #brday2, #brday2loop, #kitchendday2, #herRoom2,#trunk, #smell, #emptyT, #takeThemLoop,#choiceBox2").css("display","none");
       $("#map").toggle();
       $("#map2").toggle();
       setTimeout(function() {$("#cctvday2").css({'opacity':'1','transition':'.5s'});},600);
        setTimeout(function() {$("#cctvday2").css({'opacity':'0','transition':'.5s'});},3600);

     }else{
       $('#tvday2loop').css({'display':'block', 'zIndex':'5'});
       $("#bedroom2, #brday2, #brday2loop, #trunk,#kitchendday2, #herRoom2, #trunk, #smell, #emptyT, #takeThemLoop,#choiceBox2").css("display","none");
       $("#map").toggle();
       $("#map2").toggle();
       setTimeout(function() {$("#cctvdaytwo").css({'opacity':'1','transition':'.5s'});},600);
       setTimeout(function() {$("#cctvdaytwo").css({'opacity':'0','transition':'.5s'});},4000);

     }
     ++clicks;
  });
  function toEatd2(){
    $("#kitchendday2").css("display","block");
    $("#kitchendday2").css("zIndex","5");
    $("#tvday2,#tvday2loop, #brday2, #brday2loop, #bedroom2, #herRoom2,#trunk,#smell, #emptyT, #takeThemLoop,#choiceBox2").css("display","none");
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
        $("#tvday2,#tvday2loop,#bedroom2, #kitchendday2, #herRoom2,#trunk, #smell,#emptyT , #takeThemLoop,#choiceBox2").css("display","none");
        $("#map").toggle();
        $("#map2").toggle();
         setTimeout(function() {$("#ccbrday2").css({'opacity':'1','transition':'.5s'});},1000);
         setTimeout(function() {$("#ccbrday2").css({'opacity':'0','transition':'.5s'});},3000);

      }else{
        $('#brday2loop').css('display','block');
        $("#brday2loop").css("zIndex","5");
        $("#tvday2,#tvday2loop,#bedroom2, #kitchendday2, #herRoom2,#trunk, #smell, #emptyT, #takeThemLoop").css("display","none");
        $("#map").toggle();
        $("#map2").toggle();
              }
      ++clickz;
   };

  function toBedd2(){
    $("#bedroom2").css("display","block");
    $("#bedroom2").css("zIndex","5");
    $("#tvday2,#tvday2loop, #brday2, #brday2loop, #kitchendday2, #herRoom2,#trunk, #smell, #emptyT").css("display","none");
    $("#map").toggle();
    $("#map2").toggle();
    $("#ccbedroomday2").css({'opacity':'1','transition':'.5s'});
    setTimeout(function() {$("#ccbedroomday2").css({'opacity':'0','transition':'.5s'});},3000);
  }
  function toBedd3(){
    $("#takeThemLoop").css("display","block");
    $("#takeThemLoop").css("zIndex","5");
    $("#tvday2,#tvday2loop, #brday2, #brday2loop, #kitchendday2, #herRoom2,#trunk, #smell,#emptyT").css("display","none");
    $("#map").toggle();
    $("#map2").toggle();
    setTimeout(function() {$("#ccbed3day2").css({'opacity':'1','transition':'.5s'});},200);
    setTimeout(function() {$("#ccbed3day2").css({'opacity':'0','transition':'.5s'});},2200);
  }

  function toHerd2(){
    $("#herRoom2").css("display","block");
    $("#herRoom2").css("zIndex","5");
    $("#tvday2,#tvday2loop, #brday2, #brday2loop, #kitchendday2, #bedroom2,#trunk, #smell, #emptyT, #takeThemLoop,#choiceBox2").css("display","none");
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
function emptyT(){
  $("#emptyT").css("display","block");
  $("#emptyT").css("zIndex","5");
  $("#tvday2,#tvday2loop, #brday2, #brday2loop, #kitchendday2, #bedroom2,#trunk, #smell, #takeThemLoop").css("display","none");
  $("#map").toggle();
  $("#map2").toggle();
  setTimeout(function() {$("#ccherroomday2").css({'opacity':'1','transition':'.5s'});},200);
  setTimeout(function() {$("#ccherroomday2").css({'opacity':'0','transition':'.5s'});},2000);
}

  function zoomFlowers(){
    $('#trunk').css('display','block');
    $('#caption5').css('display','block');
    setTimeout(function() {$("#caption5").css({'opacity':'1','transition':'.5s'});},100);
    var f6= document.getElementById('choiceBox2');
    f6.style.display="block";
    setTimeout(function() {f6.style.opacity="1"; f6.style.transition = "1.5s";},2000);

    }
      var clickzzz=0
    function smell(){
      if (clickzzz==0){
      $('#smell').css({'zIndex':'10','display':'block'});
      setTimeout(function() {$("#smell").attr('src','gfile/smellloop.gif');},2500);
      $('#trunk, #caption5').css('display','none');
      $('#choiceBox2').css({'opacity':"0", 'transition':'.5s'});
      setTimeout(function() {$("#caption6").css({'opacity':'1','transition':'.5s'});},2000);
      setTimeout(function() {$("#caption6").css({'opacity':'0','transition':'.5s'});},4600);
        }else{
          $('#smell').css({'zIndex':'10','display':'block'});
          setTimeout(function() {$("#smell").attr('src','gfile/smellloop.gif');},2500);
          $('#trunk, #caption5, #choiceBox2').css('display','none');
          $('#choiceBox2').css({'opacity':"0", 'transition':'.5s'});
          setTimeout(function() {$("#captionsix").css({'opacity':'1','transition':'.5s'});},0);
          setTimeout(function() {$("#captionsix").css({'opacity':'0','transition':'.5s'});},2600);
        }
++clickzzz;

};

function takeThem(){
  window.location.href ="3d2.html";
}

// night 2
function toTVn2(){
  $('#tvnight2').css({'display':'block', 'zIndex':'5'});
  $("#kitchennight2,#brnight2,#bedn2,#herroomn2, #n2youloop, #n2you").css("display","none");
  $("#map").toggle();
  setTimeout(function() {$("#cctvnight2").css({'opacity':'1','transition':'.5s'});},0);
  setTimeout(function() {$("#cctvnight2").css({'opacity':'0','transition':'.5s'});},5000);
}

var clickzz=0
function toEatnite2(){
  if (clickzz==0){
  $('#kitchennight2').css({'display':'block', 'zIndex':'5'});
  $('#n2you').css({'display':'block', 'zIndex':'6'});
  setTimeout(function() {$("#n2you").attr("src","gfile/day2youloop.gif");},3500);
    $("#toTVn2,#brnight2,#bedn2,#herroomn2").css("display","none");
    $("#map").toggle();
  setTimeout(function() {$("#cceatnight2").css({'opacity':'1','transition':'.5s'});},600);
  setTimeout(function() {$("#cceatnight2").css({'opacity':'0','transition':'.5s'});},2600);
}else{
  $('#kitchennight2').css({'display':'block', 'zIndex':'5'});
  $('#n2youloop').css({'display':'block', 'zIndex':'6'});
    $("#toTVn2,#brnight2,#bedn2,#herroomn2").css("display","none");
    $("#map").toggle();
  setTimeout(function() {$("#cceatnighttwo").css({'opacity':'1','transition':'.5s'});},600);
  setTimeout(function() {$("#cceatnighttwo").css({'opacity':'0','transition':'.5s'});},2600);
}
++clickzz;
};

function toBRn2(){
  $('#brnight2').css({'display':'block', 'zIndex':'5'});
  $("#toTVn2, #kitchennight2, #bedn2,#herroomn2, #n2youloop, #n2you").css("display","none");
  $("#map").toggle();
  setTimeout(function() {$("#ccbrnight2").css({'opacity':'1','transition':'.5s'});},600);
  setTimeout(function() {$("#ccbrnight2").css({'opacity':'0','transition':'.5s'});},2600);
}

var cliks=0
function toBedn2(){
  if (cliks==0){

    $('#bedn2').css({'display':'block', 'zIndex':'5'});
    $("#toTVn2, #kitchennight2, #brnight2,#herroomn2, #n2youloop, #n2you").css("display","none");
      $("#map").toggle();
    setTimeout(function() {$("#ccbedn2").css({'opacity':'1','transition':'.5s'});},600);
    setTimeout(function() {$("#ccbedn2").css({'opacity':'0','transition':'.5s'});},2600);

    }else{
  $('#bedn2').css({'display':'block', 'zIndex':'5'});
  $("#toTVn2, #kitchennight2, #brnight2,#herroomn2, #n2youloop, #n2you").css("display","none");
    $("#map").toggle();
  setTimeout(function() {$("#chooseNo").css({'opacity':'1','transition':'.5s'});},600);
  setTimeout(function() {$("#chooseNo").css({'opacity':'0','transition':'.5s'});},2600);


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
        if (idleTime > 7) {
          $("#goDark").css({'display':'block',})
            setTimeout(function() {$("#goDark").css({'opacity':'1','transition':'1s'});},10);
           setTimeout(function() {
             window.location.href ="2d3.html";
           },1500)
        }}

}
++cliks;
};


function toHernite2(){
  $('#herroomn2').css({'display':'block', 'zIndex':'5'});
  $("#toTVn2, #kitchennight2, #bedn2, #brnight2, #n2youloop,#n2you").css("display","none");
  $("#map").toggle();
  setTimeout(function() {$("#ccok").css({'opacity':'1','transition':'.5s'});},600);
  setTimeout(function() {$("#ccok").css({'opacity':'0','transition':'.5s'});},2600);

}

function zoomJoinher(){
  $('#joinherclose').css({'display':'block', 'zIndex':'16'});
    setTimeout(function() {$("#ccresponse").css({'opacity':'1','transition':'.5s'});},600);
    setTimeout(function() {$("#ccresponse").css({'opacity':'0','transition':'.5s'});},2600);
  setTimeout(function() {$("#joinherclose").attr("src","gfile/joinherloop.gif");},3100);

  var g6= document.getElementById('choiceBox3');
  g6.style.display="block";
  setTimeout(function() {g6.style.opacity="1"; g6.style.transition = "1.5s";},4000);


}

function leaveRoom(){
  $('#joinherclose').css('display','none');
  var g6= document.getElementById('choiceBox3');
  // g6.style.display="block";
  setTimeout(function() {g6.style.opacity="0"; g6.style.transition = ".5s";},0);
  setTimeout(function() {$("#badreaction").css({'opacity':'1','transition':'.5s'});},600);
  setTimeout(function() {$("#badreaction").css({'opacity':'0','transition':'.5s'});},2600);

}
//day3

function ending3(){
  var r = document.getElementById('redo');
  $('#endingloss').css({'display':'block', 'zIndex':'17'});
  setTimeout(function() {$('#endingloss').css('display','none');},4000);
  $('#endinglossstay').css({'display':'block', 'zIndex':'16'});
  $("#dead, #kitchenday3, #brday3, #emptyR, #tvnight2, #tv2d3").css("display","none");
  $("#map").toggle();
  setTimeout(function() {$("#ccmovefeet").css({'opacity':'1','transition':'.5s'});},1000);
  setTimeout(function() {$("#ccmovefeet").css({'opacity':'0','transition':'.5s'});},2600);
  setTimeout(function() {$("#ccnews").css({'opacity':'1','transition':'.5s'});},3600);
  // setTimeout(function() {$("#ccnews").css({'opacity':'0','transition':'.5s'});},2600);
  setTimeout(function() {r.style.display="block"},4900);
  setTimeout(function() {r.style.opacity="1"; r.style.transition = ".7s";},7000);

}
function toEatd3(){
  $('#kitchenday3').css({'display':'block', 'zIndex':'5'});
  $("#dead,#brday3, #emptyR, #tv2d3, #kitchen2d3").css("display","none");
  $("#map").toggle();
  setTimeout(function() {$("#cckitchend33").css({'opacity':'1','transition':'.5s'});},200);
  setTimeout(function() {$("#cckitchend33").css({'opacity':'0','transition':'.5s'});},2200);
}
function toEat2d3() {
  $('#kitchen2d3').css({'display':'block', 'zIndex':'5'});
  $("#dead,#kitchenday3, #emptyR, #tv2d3, #brday3").css("display","none");
  $("#map").toggle();
  setTimeout(function() {$("#cckitchend3").css({'opacity':'1','transition':'.5s'});},200);
  setTimeout(function() {$("#cckitchend3").css({'opacity':'0','transition':'.5s'});},2200);
}
function toBRd3(){
  $('#brday3').css({'display':'block', 'zIndex':'5'});
  $("#dead,#kitchenday3, #emptyR, #tv2d3, #kitchen2d3").css("display","none");
  $("#map").toggle();
  setTimeout(function() {$("#ccbrday3").css({'opacity':'1','transition':'.5s'});},200);
  setTimeout(function() {$("#ccbrday3").css({'opacity':'0','transition':'.5s'});},2200);
}
function toBed3(){
  $('#dead').css({'display':'block', 'zIndex':'5'});
  $("#brday3,#kitchenday3, #emptyR, #tv2d3, #kitchen2d3").css("display","none");
  $("#map").toggle();
  setTimeout(function() {$("#ccbed3day3").css({'opacity':'1','transition':'.5s'});},200);
  setTimeout(function() {$("#ccbed3day3").css({'opacity':'0','transition':'.5s'});},2200);
}
function notThere3(){
  $('#emptyR').css({'display':'block', 'zIndex':'5'});
  $("#brday3,#kitchenday3, #dead, #tv2d3, #kitchen2d3").css("display","none");
  $("#map").toggle();
  setTimeout(function() {$("#ccnotThere3").css({'opacity':'1','transition':'1s'});},500);
  setTimeout(function() {$("#ccnotThere3").css({'opacity':'0','transition':'.5s'});},3500);
}
function notThere(){
  $('#emptyR').css({'display':'block', 'zIndex':'5'});
  $("#brday3,#kitchenday3, #dead, #tv2d3, #kitchen2d3").css("display","none");
  $("#map").toggle();
  setTimeout(function() {$("#ccnotThere").css({'opacity':'1','transition':'1s'});},500);
  setTimeout(function() {$("#ccnotThere").css({'opacity':'0','transition':'.5s'});},3500);

  $('#map').attr('usemap','#mapunlocked2');
}


// 2d3 things
function no(){
setTimeout(function() {$("#ccno").css({'opacity':'1','transition':'.5s'});},0);
setTimeout(function() {$("#ccno").css({'opacity':'0','transition':'.5s'});},1500);
}

function toBed2d3(){
  if (cliks==0){
    $('#bed2d3').css({'display':'block', 'zIndex':'6'});
    setTimeout(function() {$('#bed2d3').css('display','none');},1000);
    $('#bed2d3loop').css({'display':'block', 'zIndex':'5'});
    $("#map").toggle();
    $("#emptyR").css("display","none");
    setTimeout(function() {$("#ccbad").css({'opacity':'1','transition':'.5s'});},200);
    setTimeout(function() {$("#ccbad").css({'opacity':'0','transition':'.5s'});},2200);

  }else{
    $('#bed2d3loop').css({'display':'block', 'zIndex':'5'});
    $("#map").toggle();
    $("#emptyR").css("display","none");
    setTimeout(function() {$("#ccbad").css({'opacity':'1','transition':'.5s'});},200);
    setTimeout(function() {$("#ccbad").css({'opacity':'0','transition':'.5s'});},2200);

  }
  ++cliks;
  };

  function toTV2d3() {
    $('#tv2d3').css({'display':'block', 'zIndex':'5'});
    $("#dead,#brday3, #emptyR,#kitchenday3").css("display","none");
    $("#map").toggle();
    setTimeout(function() {$("#cctv3d2").css({'opacity':'1','transition':'.5s'});},200);
    setTimeout(function() {$("#cctv3d2").css({'opacity':'0','transition':'.5s'});},2200);
  }
// endings

function goToEnding1() {
  $("#goGold").css({'display':'block',})
    setTimeout(function() {$("#goGold").css({'opacity':'1','transition':'1.5s'});},10);
  setTimeout(function() {
    window.location.href ="1.html";
  },1500)
}

function redo(){
  $("#goDark").css({'display':'block',})
    setTimeout(function() {$("#goDark").css({'opacity':'1','transition':'.8s'});},10);
  setTimeout(function() {
    window.location.href ="index.html";
  },1500)
}






// imageMapResize();
