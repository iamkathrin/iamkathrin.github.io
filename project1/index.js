function openModal() {
  document.getElementById("myModal").style.display="block";
}

function closeModal() {
  document.getElementById("myModal").style.display="none";
}
var slideIndex =1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex=n);
}

function showSlides(n) {
  var i;
  var slidez = document.getElementsByClassName ("mySlides");
  var dotz= document.getElementsByClassName("demo");
  if (n> slidez.length){slideIndex=1}
  if(n<1) {slideIndex= slidez.length}
  for(i=0; i< slidez.length; i++){
    slidez[i].style.display ="none";
  }
for (i=0; i< dotz.length; i++){
  dotz[i].className = dotz[i].className.replace (" active","");
}
slidez[slideIndex-1].style.display= "block";
dotz[slideIndex-1].className += " active";
}


var slideindex =1;
showSlides2(slideindex);

function plusSlides2(n) {
  showSlides2(slideindex += n);
}

function currentSlide2(n){
  showSlides2(slideindex=n);
}
function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName ("mySlides2");
  var dots= document.getElementsByClassName("demo");
  if (n> slides.length){slideindex=1}
  if(n<1) {slideindex= slides.length}
  for(i=0; i< slides.length; i++){
    slides[i].style.display ="none";
  }
  for (i=0; i< dots.length; i++){
    dots[i].className = dots[i].className.replace (" active","");
  }
  slides[slideindex-1].style.display="block";
  dots[slideindex-1].className += " active";
}

function playGif() {
  var el1 = document.getElementById("fox");
  var el2 = document.getElementById("largefox");
  el1.src = "stillprofile.gif";
  setTimeout(function() { el1.src="stillprofile.png";}, 2500);
  setTimeout(function() { el2.style.display = "block"; });
  setTimeout(function() { el2.style.display = "none"; }, 2500);
}
