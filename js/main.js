function resizeIntroDiv(){

  console.log("resize div");

  intro = document.getElementById("intro");
  setIntroDivHeight(intro, window.innerHeight-160);
}

function setIntroDivHeight(div, height){
  div.style.height = height+"px";
}
