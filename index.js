
for(let i=0;i<document.querySelectorAll("button").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){

        // console.log(this.innerText);
        let a=this.innerText;
        playsound(a);



});}



function playsound(a){
  if(a==="w"){
var so=new Audio("sounds/tom-1.mp3");
so.play();
}
  if(a==="a"){
var so=new Audio("sounds/tom-2.mp3");
so.play();
}
  if(a==="s"){
var so=new Audio("sounds/amogh.m4a");
so.play();
}
  if(a==="d"){
var so=new Audio("sounds/snare.mp3");
so.play();
}
  if(a==="e"){
var so=new Audio("sounds/tom-3.mp3");
so.play();
}
  if(a==="r"){
var so=new Audio("sounds/kick-bass.mp3");
so.play();
}
  if(a==="t"){
var so=new Audio("sounds/tom-4.mp3");
so.play();
}






}
