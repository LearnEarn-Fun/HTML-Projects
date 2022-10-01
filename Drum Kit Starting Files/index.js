
var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var h=this.innerHTML;
  check(h);
  buttonAnimation(h);
});

  }
document.addEventListener("keydown", function(event){
  check(event.key);
  buttonAnimation(event.key);
});

function check(b){
   switch (b) {
     case "w":
     var voice=new Audio("sounds/crash.mp3");
     voice.play();
       break;
       case "a":
       var voice=new Audio("sounds/kick-bass.mp3");
       voice.play();
       break;
       case "s":
       var voice=new Audio("sounds/snare.mp3");
       voice.play();
       break;
       case "d":
       var voice=new Audio("sounds/tom-1.mp3");
       voice.play();
       break;
       case "j":
       var voice=new Audio("sounds/tom-2.mp3");
       voice.play();
       break;
       case "k":
       var voice=new Audio("sounds/tom-3.mp3");
       voice.play();
       break;
       case "l":
       var voice=new Audio("sounds/tom-4.mp3");
       voice.play();
     default:
     alert("Wrong Key");
   }
 }

 function buttonAnimation(currentKey){
   var activeButton=document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
     activeButton.classList.remove("pressed")
   },100);
 }
