/* Declare variables below to save the different sections (divs) of your story*/
let secondButtons = document.querySelector(".button")
let firstButton=document.querySelector(".option-one");
let secondButton=document.querySelector(".option-two");
let thirdButton=document.querySelector(".option-end-one");
let fourthButton=document.querySelector(".option-end-two")
let firstAnswer=document.querySelector(".option-one-screen");
let secondAnswer=document.querySelector(".option-two-screen");
let firstEnd=document.querySelector(".option-one-end");
let secondEnd=document.querySelector(".option-two-end");


firstButton.onclick=function(){
  firstAnswer.style.display="block";
  secondButtons.style.display="block";
}

secondButton.onclick=function(){
    secondAnswer.style.display="block";
    secondButtons.style.display="block";
}

thirdButton.onclick=function(){
    firstEnd.style.display="block";
  console.log(".option-end-one")
}

fourthButton.onclick=function(){
  secondEnd.style.display="block";
  console.log(".option-end-two")
}


