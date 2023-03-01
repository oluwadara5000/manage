const anisha = document.getElementById("anisha");
const ali = document.getElementById("ali");
const richard = document.getElementById("richard");
const shanai = document.getElementById("shanai");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");

ali.style.display = "none"
richard.style.display = "none"
shanai.style.display = "none";


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

