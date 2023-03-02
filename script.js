const anisha = document.getElementById("anisha");
const ali = document.getElementById("ali");
const richard = document.getElementById("richard");
const shanai = document.getElementById("shanai");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");

const open = document.getElementById("open");
const close = document.getElementById("close");
const panel = document.getElementById("panel");
const panelList = document.getElementById("panel-list");
const blur = document.getElementById("blur");

ali.style.display = "none"
richard.style.display = "none"
shanai.style.display = "none";
close.style.display = "none";


one.addEventListener("click", function () {
  anisha.style.display = "flex"
  ali.style.display = "none"
  richard.style.display = "none"
  shanai.style.display = "none";
  one.style.backgroundColor = "hsl(12, 88%, 59%)";
  two.style.backgroundColor = "#ffffff";
  three.style.backgroundColor = "#ffffff";
  four.style.backgroundColor = "#ffffff";
})

two.addEventListener("click", function () {
  ali.style.display = "flex"
  anisha.style.display = "none"
  richard.style.display = "none"
  shanai.style.display = "none"
  two.style.backgroundColor = "hsl(12, 88%, 59%)";
  one.style.backgroundColor = "#ffffff"
  three.style.backgroundColor = "#ffffff"
  four.style.backgroundColor = "#ffffff";
})

  three.addEventListener("click", function () {
    richard.style.display = "flex";
    anisha.style.display = "none";
    ali.style.display = "none";
    shanai.style.display = "none";
    three.style.backgroundColor = "hsl(12, 88%, 59%)";
    one.style.backgroundColor = "#ffffff";
    two.style.backgroundColor = "#ffffff";
    four.style.backgroundColor = "#ffffff";
})


four.addEventListener("click", function () {
  shanai.style.display = "flex";
  anisha.style.display = "none";
  ali.style.display = "none";
  richard.style.display = "none";
  four.style.backgroundColor = "hsl(12, 88%, 59%)";
  one.style.backgroundColor = "#ffffff";
  two.style.backgroundColor = "#ffffff";
  three.style.backgroundColor = "#ffffff";
});

open.addEventListener("click", function () {
  open.style.display = "none"
  close.style.display = "block"
  panel.style.height = "200px"
  panel.style.padding = "45px 0"
  panelList.style.display = "flex"
  blur.style.opacity = "0.5"
});

close.addEventListener("click", function () {
  open.style.display = "block"
  close.style.display = "none"
  panel.style.height = "0"
  panel.style.padding = "0"
  panelList.style.display = "none"
  blur.style.opacity = "0"
});

