window.addEventListener("scroll", function () {
  var elemento = document.getElementById("razerLogo");
  var Scroll = 0;
  Scroll = this.window.scrollY;
  if (Scroll <= 300) {
    elemento.classList.remove("oculto");
  } else {
    elemento.classList.add("oculto");
  }
});

var razerLogo = document.getElementById("razerLogo");

razerLogo.addEventListener("mousemove", function () {
  razerLogo.classList.remove("oculto");
});

razerLogo.addEventListener("mouseout", function () {
  razerLogo.classList.add("oculto");
});
