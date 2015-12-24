var headerMargin = 0;

function resizeIntroDiv(){
  intro = document.getElementById("intro");
  header = document.getElementsByTagName("header")[0]
  headerMargin = window.getComputedStyle(header).marginTop
  headerMargin = headerMargin.substring(0, headerMargin.length-2)
  headerHeight = window.getComputedStyle(header).height
  headerHeight = headerHeight.substring(0, headerHeight.length-2)

  setIntroDivHeight(intro, window.innerHeight-headerMargin - headerHeight);
}

function setIntroDivHeight(div, height){
  div.style.height = height+"px";
}

greetings = [
  "Hi",
  "Hello",
  "Greetings",
  "👋",
  "你好",
  "Hallå där",
  "Bonjour",
  "Hola",
  "Hallo"
]

function changeGreeting(){
  //for a later time
}
